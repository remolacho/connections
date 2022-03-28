# == Schema Information
#
# Table name: unsubscribed_email
#
#  id         :integer          not null, primary key
#  dst_email  :string(512)
#  id_account :integer
#  src_email  :string(512)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  unsubscribed_email_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class UnsubscribedEmail < ApplicationRecord
	self.table_name = "unsubscribed_email"
end
