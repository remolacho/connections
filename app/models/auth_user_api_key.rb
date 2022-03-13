# == Schema Information
#
# Table name: auth_user_api_key
#
#  id                :integer          not null, primary key
#  api_key           :string(512)
#  expires           :datetime
#  id_auth_user      :integer
#  id_unique_account :string(32)
#  suspended         :string(1)
#  created_at        :datetime
#  updated_at        :datetime
#
# Indexes
#
#  id_auth_user__idx  (id_auth_user)
#
# Foreign Keys
#
#  auth_user_api_key_ibfk_1  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class AuthUserApiKey < ApplicationRecord
	self.table_name = "auth_user_api_key"
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :account, class_name: "Account", foreign_key: 'id_unique_account', optional: true
end
