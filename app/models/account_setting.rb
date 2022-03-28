# == Schema Information
#
# Table name: account_settings
#
#  id                          :integer          unsigned, not null, primary key
#  email_header_from_connectus :string(1)        default("T")
#  email_link_tracking         :string(1)
#  email_unsubscribe           :string(1)        default("T")
#  id_account                  :integer
#
class AccountSetting < ApplicationRecord
	self.table_name = "account_settings"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end
