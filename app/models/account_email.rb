class AccountEmail < ApplicationRecord
	self.table_name = "account_email"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end