# == Schema Information
#
# Table name: short_link
#
#  id           :integer          not null, primary key
#  clicks       :integer
#  id_account   :integer
#  id_auth_user :integer
#  id_unique    :string(7)        not null
#  link         :string(512)      not null
#  created_at   :datetime
#  updated_at   :datetime
#
# Indexes
#
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#  id_unique          (id_unique) UNIQUE
#
# Foreign Keys
#
#  short_link_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  short_link_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class ShortLink < ApplicationRecord
	self.table_name = "short_link"
end
