# == Schema Information
#
# Table name: delivery
#
#  id            :integer          not null, primary key
#  deliver_at    :datetime
#  delivery_type :string(512)
#  id_account    :integer
#  id_auth_user  :integer
#  id_product    :integer
#  id_unique     :string(32)       not null
#  name          :string(512)
#  created_at    :datetime
#  updated_at    :datetime
#
# Indexes
#
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#  id_product__idx    (id_product)
#  id_unique          (id_unique) UNIQUE
#
# Foreign Keys
#
#  delivery_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  delivery_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#  delivery_ibfk_3  (id_product => product.id) ON DELETE => cascade
#
FactoryBot.define do
	factory :delivery do
		account { account }
		auth_user { auth_user }
		product { product }
		id_unique { Delivery.generate_unique_id }
  end

	trait :platform_sms do
		name { Delivery.assign_name_platform_sms(auth_user) }
		delivery_type { Delivery::PLATFORM }
		deliver_at { Time.now }
	end

	trait :platform_sms_due_date do
		name { Delivery.assign_name_platform_sms(auth_user) }
		delivery_type { Delivery::PLATFORM }
    created_at { Time.now - 1.month }
    updated_at { Time.now - 1.month }
		deliver_at { Time.now - 1.month }
	end
end