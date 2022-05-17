class AddColumnHeaderToContactList < ActiveRecord::Migration[6.1]
  def change
    add_column :contact_list, :header, :text
  end
end
