class AddColumnIdTransactionToContactList < ActiveRecord::Migration[6.1]
  def change
    add_column :contact_list, :id_transaction, :integer, null: true
  end
end
