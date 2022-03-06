class AddrCountry < ApplicationRecord
	self.table_name = "addr_country"
	has_many :regions, class_name: "AddrRegion", foreign_key: "country_id"
end