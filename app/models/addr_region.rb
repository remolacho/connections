class AddrRegion < ApplicationRecord
	self.table_name = "addr_region"
	belongs_to :addr_country, class_name: "AddrCountry", foreign_key: 'country_id', optional: true
end