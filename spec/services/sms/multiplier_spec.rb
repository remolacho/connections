# frozen_string_literal: true

require 'rails_helper'

describe Sms::Balance::Multiplier, type: :service do
  include_context('multiplier_stuff')

  context 'Busca si tiene saldo para multiples mensajes' do
    it 'La cuenta no tiene saldo' do
      service = Sms::Balance::Multiplier.new(user: current_user,
                                             account: account,
                                             country: country_without_balance,
                                             sms_content: sms_multiplier[:sms_content])

      expect{service.call}.to raise_error(ActiveRecord::RecordNotFound)
    end

    it 'La cuenta tiene saldo insuficiente' do
      service = Sms::Balance::Multiplier.new(user: current_user,
                                             account: account,
                                             country: country_with_balance,
                                             sms_content: sms_multiplier[:sms_content])

      expect{service.call}.to raise_error(ActiveRecord::RecordNotFound)
    end

    it 'tiene saldo para el envio de 1 mensaje' do
      service = Sms::Balance::Multiplier.new(user: current_user,
                                             account: account,
                                             country: country_with_balance,
                                             sms_content: 'Hola connectus 1 mensaje')

      result = service.call
      expect(result[:success]).to eq(true)
      expect(result[:messages_count].zero?).to eq(false)
      expect(result[:balance].zero?).to eq(false)
    end

    it 'tiene saldo para el envio de multiplier' do
      service = Sms::Balance::Multiplier.new(user: current_user,
                                             account: account,
                                             country: country_with_many_balance,
                                             sms_content: sms_multiplier[:sms_content])

      result = service.call
      expect(result[:success]).to eq(true)
      expect(result[:messages_count].zero?).to eq(false)
      expect(result[:balance].zero?).to eq(false)
    end
  end

end

