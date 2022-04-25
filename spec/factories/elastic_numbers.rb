# == Schema Information
#
# Table name: elastic_number
#
#  id             :integer          not null, primary key
#  elastic_number :bigint           not null
#  id_account     :integer
#  id_country     :integer
#  is_default     :string(1)
#  created_at     :datetime
#  updated_at     :datetime
#
# Indexes
#
#  elastic_number   (elastic_number) UNIQUE
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  elastic_number_ibfk_1  (id_account => account.id) ON DELETE => cascade
#

FactoryBot.define do
	factory :elastic_number do
		elastic_number { ENV['DST_PHONE'] }
		country { FactoryBot.create(:addr_country) }
		is_default  { 'F' }
  end

	trait :with_account do
    account { account }
		is_default  { 'T' }
	end
end