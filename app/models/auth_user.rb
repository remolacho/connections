class AuthUser < ApplicationRecord
	self.table_name = "auth_user"
	has_many :auth_user_api_keys, class_name: "AuthUserApiKey", foreign_key: "id_auth_user"
	has_many :money_transactions, class_name: "MoneyTransaction", foreign_key: "id_auth_user"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end