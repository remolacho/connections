# == Schema Information
#
# Table name: email
#
#  id            :integer          not null, primary key
#  dst_email     :string(512)      not null
#  email_content :text(4294967295)
#  id_account    :integer
#  id_delivery   :integer
#  id_mg         :string(512)
#  id_unique     :string(32)       not null
#  priority      :integer
#  sender        :string(512)
#  src_email     :string(512)      not null
#  status        :string(512)
#  subject       :string(512)
#  created_at    :datetime
#  updated_at    :datetime
#
# Indexes
#
#  id_account__idx   (id_account)
#  id_delivery__idx  (id_delivery)
#  id_mg_idx         (id_mg)
#  id_unique         (id_unique) UNIQUE
#  status_idx        (status)
#
# Foreign Keys
#
#  email_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  email_ibfk_2  (id_delivery => delivery.id) ON DELETE => cascade
#
class Email < ApplicationRecord
	self.table_name = "email"
end
