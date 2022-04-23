module Sms
  class ClearContent < BaseService
    attr_accessor :sms_content

    def initialize(sms_content:)
      @sms_content = sms_content
    end

    def call
      raise ArgumentError, I18n.t('services.sms.clear_content.content_empty') unless sms_content.present?

      message = sms_content.encode("iso-8859-1").force_encoding("utf-8")
      message = ActiveSupport::Inflector.transliterate(message)

      {success: true, sms_content: message}
    rescue Encoding::UndefinedConversionError => e
      raise ArgumentError, "error: #{e.to_s}"
    end
  end
end

