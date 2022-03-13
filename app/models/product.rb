# == Schema Information
#
# Table name: product
#
#  id         :integer          not null, primary key
#  name       :string(512)      not null
#  created_at :datetime
#  updated_at :datetime
#
class Product < ApplicationRecord
	self.table_name = "product"
end
