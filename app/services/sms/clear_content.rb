module Sms
  class ClearContent < BaseService
    attr_accessor :sms_content, :resource, :skip_nil

    def initialize(sms_content:, resource: 'individual', skip_nil: false)
      @sms_content = sms_content
      @resource = resource
      @skip_nil = skip_nil
    end

    def call
      if !skip_nil && !sms_content.present?
        raise ArgumentError, I18n.t('services.sms.clear_content.content_empty')
      end

      message = sms_content&.encode("iso-8859-1")&.force_encoding("utf-8") || ''
      message = ActiveSupport::Inflector.transliterate(message)

      {success: true, sms_content: message.strip}
    rescue Encoding::UndefinedConversionError => e
      raise ArgumentError, "error #{resource}: #{e.to_s}"
    end
  end
end

