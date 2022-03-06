class Purchase < ApplicationRecord
	self.table_name = "purchase"
	has_many :money_transactions, class_name: "MoneyTransaction", foreign_key: "id_purchase"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :country, class_name: "Country", foreign_key: 'id_country', optional: true
end