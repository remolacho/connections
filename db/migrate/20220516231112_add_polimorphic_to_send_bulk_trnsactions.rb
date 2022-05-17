class AddPolimorphicToSendBulkTrnsactions < ActiveRecord::Migration[6.1]
  def change
    add_column :send_bulk_transactions, :adjustable_id, :integer
    add_column :send_bulk_transactions, :adjustable_type, :string

    add_index :send_bulk_transactions, [:adjustable_id, :adjustable_type], name: 'index_transactions_adjustable_type_and_adjustable_id'
  end
end