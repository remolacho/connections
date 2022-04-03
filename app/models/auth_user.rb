# == Schema Information
#
# Table name: auth_user
#
#  id                            :integer          not null, primary key
#  auth_user_type                :string(512)
#  avatar                        :string(512)
#  banned                        :string(1)
#  deleted                       :string(1)
#  email                         :string(512)
#  first_name                    :string(128)
#  id_account                    :integer
#  is_migrated                   :boolean          default(TRUE)
#  last_login                    :datetime
#  last_name                     :string(128)
#  password                      :string(512)
#  password_digest               :string(255)
#  phone                         :bigint
#  registration_key              :string(512)
#  reset_password_key            :string(512)
#  reset_password_key_expires_at :datetime
#  created_at                    :datetime
#  updated_at                    :datetime
#  registration_id               :string(512)
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  auth_user_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class AuthUser < ApplicationRecord
	include Recoverable

	has_secure_password

	self.table_name = "auth_user"
	has_many :auth_user_api_keys, class_name: "AuthUserApiKey", foreign_key: "id_auth_user"
	has_many :money_transactions, class_name: "MoneyTransaction", foreign_key: "id_auth_user"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true

	validates :password, presence: true, on: :create
	validates :email, uniqueness: {  message: I18n.t('models.auth_user.validations.email') }
	validates_presence_of %i[email first_name last_name phone], message: I18n.t('models.auth_user.validations.required')

	ROLE_ADMIN = 'ADMIN'

	def self.generate_registration_key
		Digest::MD5.hexdigest("C0nn3ctu22020Et1n3R-#{SecureRandom.uuid.split('-').join}-#{Time.now.strftime('%d%m%Y%H%M%S')}")
	end

	def current_phone
		Rails.env.production? ? phone : ENV['DST_PHONE']
	end
end
