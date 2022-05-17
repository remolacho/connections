# == Schema Information
#
# Table name: contact_list
#
#  id                 :integer          not null, primary key
#  contact_list_type  :string(512)
#  header             :text(65535)
#  id_account         :integer
#  id_unique          :string(64)
#  name               :string(512)
#  number_of_contacts :integer
#  created_at         :datetime
#  updated_at         :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  contact_list_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class ContactList < ApplicationRecord
	self.table_name = "contact_list"

	has_many :send_bulk_transactions, as: :adjustable
	has_one :contact_list_data, class_name: 'ContactListData', foreign_key: 'id_contact_list'
end
