# == Schema Information
#
# Table name: dlr
#
#  id              :integer          not null, primary key
#  body            :text(4294967295)
#  id_jasmin       :string(512)
#  id_sms_outgoing :integer
#  status          :string(512)
#  created_at      :datetime
#
# Indexes
#
#  id_jasmin_idx         (id_jasmin)
#  id_sms_outgoing__idx  (id_sms_outgoing)
#
# Foreign Keys
#
#  dlr_ibfk_1  (id_sms_outgoing => sms_outgoing.id) ON DELETE => cascade
#
class Dlr < ApplicationRecord
	self.table_name = "dlr"
end
