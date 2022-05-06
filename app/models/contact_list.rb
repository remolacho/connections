# == Schema Information
#
# Table name: contact_list
#
#  id                 :integer          not null, primary key
#  contact_list_type  :string(512)
#  id_account         :integer
#  id_transaction     :integer
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
end
