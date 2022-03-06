class Delivery < ApplicationRecord
	self.table_name = "delivery"
	has_many :msg_transactions, class_name: "MsgTransaction", foreign_key: "id_delivery"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :product, class_name: "Product", foreign_key: 'id_product', optional: true

end