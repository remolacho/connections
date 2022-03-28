# == Schema Information
#
# Table name: email_event
#
#  id              :integer          not null, primary key
#  email_event     :string(512)
#  event_content   :text(4294967295)
#  event_timestamp :datetime
#  id_account      :integer
#  id_delivery     :integer
#  id_email        :integer
#  id_event        :string(512)
#  created_at      :datetime
#  updated_at      :datetime
#
# Indexes
#
#  id_account__idx   (id_account)
#  id_delivery__idx  (id_delivery)
#  id_email__idx     (id_email)
#  id_event_dix      (id_event)
#
# Foreign Keys
#
#  email_event_ibfk_1  (id_email => email.id) ON DELETE => cascade
#  email_event_ibfk_2  (id_delivery => delivery.id) ON DELETE => cascade
#  email_event_ibfk_3  (id_account => account.id) ON DELETE => cascade
#
class EmailEvent < ApplicationRecord
	self.table_name = "email_event"
end
