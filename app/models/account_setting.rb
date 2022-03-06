class AccountSetting < ApplicationRecord
	self.table_name = "account_settings"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end