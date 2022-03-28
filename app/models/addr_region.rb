# == Schema Information
#
# Table name: addr_region
#
#  id         :integer          not null, primary key
#  name       :string(512)
#  country_id :integer          not null
#
# Indexes
#
#  country_id__idx  (country_id)
#
# Foreign Keys
#
#  addr_region_ibfk_1  (country_id => addr_country.id) ON DELETE => cascade
#
class AddrRegion < ApplicationRecord
	self.table_name = "addr_region"
	belongs_to :addr_country, class_name: "AddrCountry", foreign_key: 'country_id', optional: true
end
