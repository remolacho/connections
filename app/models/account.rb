class Account < ApplicationRecord
	self.table_name = "account"

	has_many :account_emails, class_name: "AccountEmail", foreign_key: "id_account"
	has_many :users, class_name: "AuthUser", foreign_key: "id_account"
	has_many :settings, class_name: "AccountSetting", foreign_key: "id_account"
	has_many :contact_lists, class_name: "ContactList", foreign_key: "id_account"
	has_many :deliveries, class_name: "Delivery", foreign_key: "id_account"
	has_many :deliveries, class_name: "Delivery", foreign_key: "id_account"
	has_many :numbers, class_name: "ElasticNumber", foreign_key: "id_account"
	has_many :unsubscribed_emails, class_name: "UnsusbscribedEmail", foreign_key: "id_account"
	has_many :unsubscribed_sms, class_name: "UnsusbscribedSms", foreign_key: "id_account"
	has_many :purchases, class_name: "Purchase", foreign_key: "id_account"
	has_many :outgoing_sms, class_name: "SmsOutgoing", foreign_key: "id_account"
	has_many :incoming_sms, class_name: "SmsIncoming", foreign_key: "id_account"
	has_many :emails, class_name: "Email", foreign_key: "id_account"
	has_many :msg_templates, class_name: "MsgTemplate", foreign_key: "id_account"
	has_many :money_transactions, class_name: "MoneyTransaction", foreign_key: "id_account"
	has_many :clients, class_name: "Client", foreign_key: "id_account"
	has_many :invitations, class_name: "AuthUserInvitation", foreign_key: "id_account"
	has_many :api_keys, class_name: "AuthUserApiKey", foreign_key: "id_unique_account"


end


