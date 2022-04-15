module Sms
  class Balance < BaseService
    attr_accessor :user, :account, :country

    def initialize(user:, account:, country:)
      @user = user
      @account = account
      @country = country
    end

    def call
      transactions = account.msg_transactions.where(id_country: country.id)
      balance = transactions.sum(:increase) - transactions.sum(:decrease)
      raise ActiveRecord::RecordNotFound, I18n.t('services.sms.balance.error') unless balance > 0

      {success: true, message: I18n.t('services.sms.balance.success')}
    end
  end
end
