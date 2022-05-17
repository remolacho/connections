class RemoveColumnTrasactionIdToContactsList < ActiveRecord::Migration[6.1]
  def change
    remove_column :contact_list, :id_transaction
  end
end
