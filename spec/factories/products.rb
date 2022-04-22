# == Schema Information
#
# Table name: product
#
#  id         :integer          not null, primary key
#  name       :string(512)      not null
#  created_at :datetime
#  updated_at :datetime

FactoryBot.define do
  factory :product do
    name { FFaker::Book.title }
  end
end
