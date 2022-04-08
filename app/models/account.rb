# == Schema Information
#
# Table name: account
#
#  id                    :integer          not null, primary key
#  address_1             :string(512)
#  address_2             :string(512)
#  dv                    :string(512)
#  email                 :string(512)
#  email_event_hook_url  :string(512)
#  id_country            :integer
#  id_county             :integer
#  id_unique             :string(32)
#  lyric                 :string(1)
#  name                  :string(512)      not null
#  phone                 :bigint
#  portability_lookup    :string(1)        default("F")
#  postpaid              :integer          default(0)
#  priority              :integer          default(1)
#  rut                   :integer
#  sms_incoming_hook_url :string(512)
#  sms_status_hook_url   :string(512)
#  created_at            :datetime
#  updated_at            :datetime
#
# Indexes
#
#  id_county__idx  (id_county)
#  id_unique       (id_unique) UNIQUE
#
# Foreign Keys
#
#  account_ibfk_1  (id_county => addr_region_county.id) ON DELETE => cascade
#
class Account < ApplicationRecord
	self.table_name = "account"

	belongs_to :country, class_name: "AddrCountry", foreign_key: 'id_country'
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
	has_many :msg_transactions, class_name: "MsgTransaction", foreign_key: "id_account"

	validates_presence_of %i[email name phone rut id_country], message: I18n.t('models.account.validations.required')
	validates :email, uniqueness: {  message: I18n.t('models.account.validations.email') }

	def self.generate_unique_id
		SecureRandom.uuid.split('-').join
	end

	def self.authorization_sms
		base64 = Base64.strict_encode64("#{ENV['ID_UNIQUE_API']}:#{ENV['SECRET_API']}")
		"Basic #{base64}"
	end
end


