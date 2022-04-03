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

FactoryBot.define do
  factory :addr_country do
    name { Faker::Address.country }
    short { name.first(2).upcase }
    currency { Faker::Currency.code }
    code { Random.rand(2) }
    flag_emoji { 'image.png' }
    number_length { Random.rand(1000) }
  end
end