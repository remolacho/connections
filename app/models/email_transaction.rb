# == Schema Information
#
# Table name: email_transaction
#
#  id                     :integer          not null, primary key
#  decrease               :integer
#  email_transaction_type :string(512)
#  id_account             :string(512)
#  id_delivery            :integer
#  id_money_transaction   :integer
#  id_pricing_plan        :integer
#  increase               :integer
#  price                  :float(53)
#  created_at             :datetime
#  updated_at             :datetime
#
# Indexes
#
#  id_delivery__idx           (id_delivery)
#  id_money_transaction__idx  (id_money_transaction)
#  id_pricing_plan__idx       (id_pricing_plan)
#
# Foreign Keys
#
#  email_transaction_ibfk_1  (id_money_transaction => money_transaction.id) ON DELETE => cascade
#  email_transaction_ibfk_2  (id_delivery => delivery.id) ON DELETE => cascade
#  email_transaction_ibfk_3  (id_pricing_plan => pricing_plan.id) ON DELETE => cascade
#
class EmailTransaction < ApplicationRecord
	self.table_name = "email_transaction"
end
