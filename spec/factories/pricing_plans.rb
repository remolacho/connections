# == Schema Information
#
# Table name: pricing_plan
#
#  id         :integer          not null, primary key
#  enabled    :string(1)
#  name       :string(512)
#  rate       :float(24)
#  created_at :datetime
#  updated_at :datetime
#

FactoryBot.define do
	factory :pricing_plan do
		enabled   { 'T' }
		name      { 'Plan por defecto chile' }
		rate      { 16 }
	end
end