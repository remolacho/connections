# == Schema Information
#
# Table name: msg_transaction
#
#  id                   :integer          not null, primary key
#  decrease             :integer
#  id_account           :integer
#  id_country           :integer
#  id_delivery          :integer
#  id_money_transaction :integer
#  id_pricing_plan      :integer
#  increase             :integer
#  msg_transaction_type :string(512)
#  created_at           :datetime
#  updated_at           :datetime
#
# Indexes
#
#  id_account__idx            (id_account)
#  id_delivery__idx           (id_delivery)
#  id_money_transaction__idx  (id_money_transaction)
#  id_pricing_plan__idx       (id_pricing_plan)
#
# Foreign Keys
#
#  msg_transaction_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  msg_transaction_ibfk_2  (id_money_transaction => money_transaction.id) ON DELETE => cascade
#  msg_transaction_ibfk_3  (id_delivery => delivery.id) ON DELETE => cascade
#  msg_transaction_ibfk_4  (id_pricing_plan => pricing_plan.id) ON DELETE => cascade
#
class MsgTransaction < ApplicationRecord
	self.table_name = "msg_transaction"
	belongs_to :delivery, class_name: "Delivery", foreign_key: 'id_delivery', optional: true
	belongs_to :money_transaction, class_name: "MoneyTransaction", foreign_key: 'id_money_transaction', optional: true
	belongs_to :pricing_plan, class_name: "PricingPlan", foreign_key: 'id_pricing_plan', optional: true
	belongs_to :country, class_name: "AddrCountry", foreign_key: 'id_country'
	belongs_to :account, class_name: "Account", foreign_key: 'id_account'
	FREE = 'FREE'.freeze
end
