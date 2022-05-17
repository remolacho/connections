module Contacts
  class SendBulk < BaseService
    attr_accessor :user, :account, :data, :type

    def initialize(user:, account:,  data:, type: 'sms')
      @user = user
      @account = account
      @data = data
      @type = type
    end

    def call
      transaction.queue = transaction.factory_worker('send_contacts')
      transaction.save!
      transaction.reload
    end

    private

    def transaction
      @transaction ||= account.send_bulk_transactions.create!(id_auth_user: user.id,
                                                              file: data[:file],
                                                              name: data[:name],
                                                              send_type: type)
    end
  end
end

