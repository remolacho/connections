class MsgTransaction < ApplicationRecord
	self.table_name = "msg_transaction"
	belongs_to :delivery, class_name: "Delivery", foreign_key: 'id_delivery', optional: true
	belongs_to :money_transaction, class_name: "MoneyTransaction", foreign_key: 'id_money_transaction', optional: true
	belongs_to :pricing_plan, class_name: "PricingPlan", foreign_key: 'id_pricing_plan', optional: true
end