# == Schema Information
#
# Table name: addr_country
#
#  id                     :integer          not null, primary key
#  code                   :integer          not null
#  currency               :string(3)
#  currency_fraction_size :integer
#  exchange_to_clp        :float(24)
#  exchange_to_usd        :float(24)
#  flag_emoji             :string(100)
#  flag_picture           :string(512)
#  name                   :string(512)
#  number_length          :integer
#  short                  :string(2)
#  vat                    :float(53)
#  updated_at             :datetime
#
class AddrCountry < ApplicationRecord
	self.table_name = "addr_country"
	has_many :regions, class_name: "AddrRegion", foreign_key: "country_id"
end
