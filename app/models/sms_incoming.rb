# == Schema Information
#
# Table name: sms_incoming
#
#  id              :integer          not null, primary key
#  dst_number      :bigint           not null
#  id_account      :integer
#  id_message      :string(512)      not null
#  id_unique       :string(32)       not null
#  sms_content     :text(4294967295)
#  sms_content_hex :text(4294967295)
#  src_number      :bigint           not null
#  src_provider    :string(512)
#  created_at      :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#  id_unique        (id_unique) UNIQUE
#
# Foreign Keys
#
#  sms_incoming_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class SmsIncoming < ApplicationRecord
	self.table_name = "sms_incoming"

	paginates_per 5
end
