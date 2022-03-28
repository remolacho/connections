# == Schema Information
#
# Table name: khipu_payment
#
#  id           :integer          not null, primary key
#  id_bill      :string(512)      not null
#  id_khipu     :string(512)      not null
#  id_purchase  :integer          not null
#  khipu_url    :string(512)      not null
#  manual_url   :string(512)      not null
#  mobile_url   :string(512)      not null
#  notification :text(4294967295)
#  created_at   :datetime
#  updated_at   :datetime
#
# Indexes
#
#  id_purchase__idx  (id_purchase)
#
# Foreign Keys
#
#  khipu_payment_ibfk_1  (id_purchase => purchase.id) ON DELETE => cascade
#
class KhipuPayment < ApplicationRecord
	self.table_name = "khipu_payment"
end
