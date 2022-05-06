# == Schema Information
#
# Table name: sms_outgoing
#
#  id            :integer          not null, primary key
#  attempts      :integer
#  dst_country   :string(512)
#  dst_number    :bigint           not null
#  dst_provider  :string(512)
#  dst_route_tag :string(64)
#  id_account    :integer
#  id_delivery   :integer
#  id_jasmin     :string(512)
#  id_unique     :string(32)       not null
#  multiplier    :integer
#  priority      :integer
#  sms_content   :text(4294967295)
#  src_number    :bigint           not null
#  status        :string(512)
#  created_at    :datetime
#  updated_at    :datetime
#
# Indexes
#
#  created_at_idx                      (created_at)
#  dst_number_idx                      (dst_number)
#  id_account__idx                     (id_account)
#  id_delivery__idx                    (id_delivery)
#  id_jasmin_idx                       (id_jasmin)
#  id_unique                           (id_unique) UNIQUE
#  sms_content                         (sms_content)
#  status_created_at_dst_provider_idx  (status,created_at,dst_provider)
#  status_idx                          (status)
#  sum_multiplier_idx                  (created_at,multiplier)
#
# Foreign Keys
#
#  sms_outgoing_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  sms_outgoing_ibfk_2  (id_delivery => delivery.id) ON DELETE => cascade
#
class SmsOutgoing < ApplicationRecord
	self.table_name = "sms_outgoing"

	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :delivery, class_name: "Delivery", foreign_key: 'id_delivery', optional: true

	STATUS_NEW = 'NEW'.freeze
end
