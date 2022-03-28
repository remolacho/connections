# == Schema Information
#
# Table name: addr_region_county
#
#  id        :integer          not null, primary key
#  name      :string(512)
#  region_id :integer          not null
#
# Indexes
#
#  region_id__idx  (region_id)
#
# Foreign Keys
#
#  addr_region_county_ibfk_1  (region_id => addr_region.id) ON DELETE => cascade
#
class AddrRegionCounty < ApplicationRecord
	self.table_name = "addr_region_county"
end
