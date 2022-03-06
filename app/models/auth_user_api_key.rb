class AuthUserApiKey < ApplicationRecord
	self.table_name = "auth_user_api_key"
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :account, class_name: "Account", foreign_key: 'id_unique_account', optional: true
end