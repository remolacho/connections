class AddColumnNameToSendBulkTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :send_bulk_transactions, :name, :string
  end
end
