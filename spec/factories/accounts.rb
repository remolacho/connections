# == Schema Information
#
# Table name: account
#
#  id                    :integer          not null, primary key
#  address_1             :string(512)
#  address_2             :string(512)
#  dv                    :string(512)
#  email                 :string(512)
#  email_event_hook_url  :string(512)
#  id_country            :integer
#  id_county             :integer
#  id_unique             :string(32)
#  lyric                 :string(1)
#  name                  :string(512)      not null
#  phone                 :bigint
#  portability_lookup    :string(1)        default("F")
#  postpaid              :integer          default(0)
#  priority              :integer          default(1)
#  rut                   :integer
#  sms_incoming_hook_url :string(512)
#  sms_status_hook_url   :string(512)
#  created_at            :datetime
#  updated_at            :datetime
#
# Indexes
#
#  id_county__idx  (id_county)
#  id_unique       (id_unique) UNIQUE
#
# Foreign Keys
#
#  account_ibfk_1  (id_county => addr_region_county.id) ON DELETE => cascade
#

FactoryBot.define do
  factory :account do
    name { FFaker::Name.first_name }
    email {
      "#{FFaker::Name.first_name}.#{20 + Random.rand(11)}#{20 + Random.rand(11)}#{20 + Random.rand(11)}@test.com"
    }
  end
end
