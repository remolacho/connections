# == Schema Information
#
# Table name: payment_method
#
#  id         :integer          not null, primary key
#  id_account :integer
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  payment_method_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class PaymentMethod < ApplicationRecord
	self.table_name = "payment_method"
end
