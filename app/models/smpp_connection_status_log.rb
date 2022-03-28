# == Schema Information
#
# Table name: smpp_connection_status_log
#
#  id                 :integer          not null, primary key
#  id_smpp_connection :integer
#  status             :string(1)
#  created_at         :datetime
#
# Indexes
#
#  id_smpp_connection__idx         (id_smpp_connection)
#  smpp_connection_status_log_idx  (created_at)
#
# Foreign Keys
#
#  smpp_connection_status_log_ibfk_1  (id_smpp_connection => smpp_connection.id) ON DELETE => cascade
#
class SmppConnectionStatusLog < ApplicationRecord
	self.table_name = "smpp_connection_status_log"
end
