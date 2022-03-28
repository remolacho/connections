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

FactoryBot.define do
  password = 'test12345'

  factory :auth_user do
    first_name { FFaker::Name.first_name }
    last_name { FFaker::Name.last_name }
    email { email }
    account { account }
    password { password }
    password_confirmation { password }
    last_login { Time.now }
  end

end
