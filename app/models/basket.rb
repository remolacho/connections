# == Schema Information
#
# Table name: basket
#
#  id             :integer          not null, primary key
#  amount         :integer          not null
#  id_country     :integer
#  id_product     :integer          not null
#  id_purchase    :integer          not null
#  price          :integer          not null
#  price_average  :float(53)        not null
#  price_with_tax :integer          not null
#  created_at     :datetime
#  updated_at     :datetime
#
# Indexes
#
#  id_product__idx   (id_product)
#  id_purchase__idx  (id_purchase)
#
# Foreign Keys
#
#  basket_ibfk_1  (id_purchase => purchase.id) ON DELETE => cascade
#  basket_ibfk_2  (id_product => product.id) ON DELETE => cascade
#
class Basket < ApplicationRecord
	self.table_name = "basket"
end
