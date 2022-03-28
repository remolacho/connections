# == Schema Information
#
# Table name: pricing_range
#
#  id         :integer          not null, primary key
#  id_country :integer
#  id_product :integer
#  price      :float(24)        not null
#  range_min  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  id_product__idx  (id_product)
#
# Foreign Keys
#
#  pricing_range_ibfk_1  (id_product => product.id) ON DELETE => cascade
#
class PricingRange < ApplicationRecord
	self.table_name = "pricing_range"
end
