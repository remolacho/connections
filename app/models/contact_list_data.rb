# == Schema Information
#
# Table name: contact_list_data
#
#  id              :integer          not null, primary key
#  contact_data    :text(4294967295)
#  id_contact_list :integer
#  created_at      :datetime
#  updated_at      :datetime
#
# Indexes
#
#  id_contact_list__idx  (id_contact_list)
#
# Foreign Keys
#
#  contact_list_data_ibfk_1  (id_contact_list => contact_list.id) ON DELETE => cascade
#
class ContactListData < ApplicationRecord
	self.table_name = "contact_list_data"

	belongs_to :contact_list, class_name: 'ContactList', foreign_key: 'id_contact_list'

end
