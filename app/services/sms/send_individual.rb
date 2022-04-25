module Sms
  class SendIndividual < BaseService
    attr_accessor :user, :account, :data, :country, :product

    def initialize(user:, account:, country:, product:,  data:)
      @user = user
      @account = account
      @data = data
      @country = country
      @product = product
    end

    def call
      raise ArgumentError, I18n.t('services.sms.send_individual.dst_number_empty') unless has_dst_number?

      multiplier = multiplier_service.call
      sending = sending_sms(multiplier)

      {
        success: true,
        message: I18n.t('services.sms.send_individual.success')
      }.merge!(sending)
    end

    private

    def sending_sms(multiplier)
      result = delivery_service.call
      raise ActiveRecord::RecordNotFound, result[:message] unless result[:success]

      sms_outgoing = account.sms_outgoings.create!(id_unique: SmsOutgoing.generate_unique_id,
                                                   id_delivery: result[:delivery].id,
                                                   src_number: src_number.elastic_number,
                                                   sms_content: clear_sms[:sms_content],
                                                   multiplier: multiplier[:messages_count],
                                                   priority: account.priority,
                                                   id_jasmin: nil,
                                                   status: SmsOutgoing::STATUS_NEW,
                                                   dst_number: data[:dst_number])

      { data: { id_unique: sms_outgoing.id_unique } }
    end

    # limpia el contenido
    def clear_sms
      @clear_sms ||= Sms::ClearContent.new(sms_content: data[:sms_content]).call
    end

    # - valida el saldo
    # - valida la cantidad de sms a enviar
    # - return { messages_count, balance}
    def multiplier_service
      @multiplier_service ||= Sms::Balance::Multiplier.new(user: user,
                                                           account: account,
                                                           country: country,
                                                           sms_content: clear_sms[:sms_content])

    end

    # busca o crea el delivery
    def delivery_service
      @delivery_service ||= Sms::Delivery::Platform.new(user: user, product: product)
    end

    def has_dst_number?
      data[:dst_number].present?
    end

    def src_number
      account.numbers.find_by!(is_default: 'T')
    end
  end
end
