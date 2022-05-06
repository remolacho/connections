# == Schema Information
#
# Table name: report
#
#  id           :integer          not null, primary key
#  expiry_at    :datetime         not null
#  file_blob    :binary(429496729
#  file_key     :string(512)      not null
#  file_name    :string(512)      not null
#  file_type    :string(512)      not null
#  generated_at :datetime         default(Wed, 24 Jan 2018 22:31:01.000000000 -03 -03:00), not null
#  id_account   :integer          not null
#  id_auth_user :integer
#  id_delivery  :integer
#  name         :string(512)      not null
#  report_type  :string(512)
#
# Indexes
#
#  file_key_idx       (file_key)
#  file_name_idx      (file_name)
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#  id_delivery__idx   (id_delivery)
#
# Foreign Keys
#
#  report_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  report_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#  report_ibfk_3  (id_delivery => delivery.id) ON DELETE => cascade
#
class Report < ApplicationRecord
	self.table_name = "report"
end
