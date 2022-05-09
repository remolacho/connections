require 'csv'

module Sms
  module SendBulk
    class Create
      attr_accessor :csv, :user, :account, :transaction

      def initialize(user:, account:, csv:, transaction:)
        @csv = csv
        @user = user
        @account = account
        @transaction = transaction
      end

      def call
        contact_list_data
      end

      private

      def contact_list
        @contact_list ||= ContactList.create!(contact_list_type: "telefono",
                                              id_account: account.id,
                                              id_unique: ContactList.generate_unique_id,
                                              name: transaction.name,
                                              number_of_contacts: csv.rows.size,
                                              id_transaction: transaction.id)
      end

      # simpre el primer attributo es id_contact_list y el ultimo contact_data ya que en este se guarda toda la info
      # incluyendo el header si se ejecuta primero el numero de filas en el campo number_of_contacts varia en 1 mas
      def contact_list_data
        @contact_list_data ||= ContactListData.create!(id_contact_list: contact_list.id, contact_data: text_array)
      end

      def text_array
        csv.rows.insert(0, csv.header)
      end
    end
  end
end