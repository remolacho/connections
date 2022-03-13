# == Schema Information
#
# Table name: paypal_payment
#
#  id             :integer          not null, primary key
#  id_bill        :string(512)
#  id_purchase    :integer          not null
#  orderID        :string(512)      not null
#  payment_method :string(512)      not null
#  paypal_state   :string(512)      not null
#  created_at     :datetime
#  updated_at     :datetime
#
# Indexes
#
#  id_purchase__idx  (id_purchase)
#
# Foreign Keys
#
#  paypal_payment_ibfk_1  (id_purchase => purchase.id) ON DELETE => cascade
#
class PaypalPayment < ApplicationRecord
	self.table_name = "paypal_payment"
end
