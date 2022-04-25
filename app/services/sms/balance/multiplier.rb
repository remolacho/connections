module Sms
  module Balance
    class Multiplier < BaseService
      attr_accessor :user, :account, :country, :sms_content

      def initialize(user:, account:, country:, sms_content:)
        @user = user
        @account = account
        @country = country
        @sms_content = sms_content
      end

      def call
        unless has_balance?
          raise ActiveRecord::RecordNotFound, I18n.t('services.sms.balance.error')
        end

        {
          success: true,
          message: I18n.t('services.sms.balance.success'),
          messages_count: messages_count,
          balance: balance_account_service[:balance],
        }
      end

      private

      def has_balance?
        messages_count <= balance_account_service[:balance]
      end

      def messages_count
        @messages_count ||= (sms_content.size.to_f / 160).ceil
      end

      def balance_account_service
        @balance_account_service ||= Sms::Balance::Account.new(user: user,
                                                               account: account,
                                                               country: country).call
      end
    end
  end
end
