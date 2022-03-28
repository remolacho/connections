# == Schema Information
#
# Table name: delivery
#
#  id            :integer          not null, primary key
#  deliver_at    :datetime
#  delivery_type :string(512)
#  id_account    :integer
#  id_auth_user  :integer
#  id_product    :integer
#  id_unique     :string(32)       not null
#  name          :string(512)
#  created_at    :datetime
#  updated_at    :datetime
#
# Indexes
#
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#  id_product__idx    (id_product)
#  id_unique          (id_unique) UNIQUE
#
# Foreign Keys
#
#  delivery_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  delivery_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#  delivery_ibfk_3  (id_product => product.id) ON DELETE => cascade
#
class Delivery < ApplicationRecord
	self.table_name = "delivery"
	has_many :msg_transactions, class_name: "MsgTransaction", foreign_key: "id_delivery"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :product, class_name: "Product", foreign_key: 'id_product', optional: true

end
