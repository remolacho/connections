# == Schema Information
#
# Table name: client_msg_transaction
#
#  id          :integer          not null, primary key
#  decrease    :integer
#  id_account  :integer
#  id_client   :integer
#  id_country  :integer
#  id_delivery :integer
#  increase    :integer
#  created_at  :datetime
#  updated_at  :datetime
#
# Indexes
#
#  id_account__idx   (id_account)
#  id_client__idx    (id_client)
#  id_delivery__idx  (id_delivery)
#
# Foreign Keys
#
#  client_msg_transaction_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  client_msg_transaction_ibfk_2  (id_client => client.id) ON DELETE => cascade
#  client_msg_transaction_ibfk_3  (id_delivery => delivery.id) ON DELETE => cascade
#
class ClientMsgTransaction < ApplicationRecord
	self.table_name = "client_msg_transaction"
end
