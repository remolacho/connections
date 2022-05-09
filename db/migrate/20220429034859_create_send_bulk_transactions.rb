class CreateSendBulkTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :send_bulk_transactions do |t|
      t.integer :id_account, index: true, null: false
      t.integer :id_auth_user, index: true, null: false
      t.integer :status, default: 0
      t.string  :send_type
      t.string  :observation
      t.timestamps
    end
  end
end
