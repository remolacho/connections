class AddColumnTokenToSendBulkTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :send_bulk_transactions, :token, :string
    add_index :send_bulk_transactions, :token, unique: true
  end
end
