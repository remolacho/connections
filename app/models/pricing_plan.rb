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
class PricingPlan < ApplicationRecord
	self.table_name = "pricing_plan"
end
