# == Schema Information
#
# Table name: provider_range
#
#  id            :integer          not null, primary key
#  provider_code :integer
#  provider_name :string(512)      not null
#  range_digits  :integer          not null
#  range_number  :integer          not null
#
# Indexes
#
#  range_number_idx  (range_number)
#
class ProviderRange < ApplicationRecord
	self.table_name = "provider_range"
end
