# == Schema Information
#
# Table name: unsubscribed_sms
#
#  id         :integer          not null, primary key
#  dst_number :bigint
#  id_account :integer
#  src_number :bigint
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  unsubscribed_sms_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class UnsubscribedSms < ApplicationRecord
	self.table_name = "unsubscribed_sms"
end
