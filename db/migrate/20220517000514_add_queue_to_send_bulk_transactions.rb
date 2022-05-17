class AddQueueToSendBulkTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :send_bulk_transactions, :queue, :string
  end
end
