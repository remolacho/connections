module Sms
  module Balance
    class Account < BaseService
      attr_accessor :user, :account, :country, :i_row

      def initialize(user:, account:, country:, i_row: nil)
        @user = user
        @account = account
        @country = country
        @i_row = i_row
      end

      def call
        transactions = account.msg_transactions.where(id_country: country.id)
        balance = transactions.sum(:increase) - transactions.sum(:decrease)

        unless balance > 0
          if i_row.present?
            return {success: false, message: I18n.t('services.sms.balance.error_row', {num_row: i_row})}
          end

          raise ActiveRecord::RecordNotFound, I18n.t('services.sms.balance.error')
        end

        { success: true, message: I18n.t('services.sms.balance.success'), balance: balance }
      end
    end
  end
end
