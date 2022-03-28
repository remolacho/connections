# == Schema Information
#
# Table name: purchase
#
#  id              :integer          not null, primary key
#  exchange_to_clp :float(24)
#  exchange_to_usd :float(24)
#  id_account      :integer          not null
#  id_auth_user    :integer          not null
#  id_country      :integer
#  id_unique       :string(32)       not null
#  payment_method  :string(512)
#  price           :float(53)
#  price_with_tax  :float(53)
#  receipt         :string(512)
#  receipt_name    :string(512)
#  status          :string(512)
#  vat             :integer
#  created_at      :datetime
#  updated_at      :datetime
#
# Indexes
#
#  created_at_idx     (created_at)
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#  id_unique          (id_unique) UNIQUE
#
# Foreign Keys
#
#  purchase_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  purchase_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class Purchase < ApplicationRecord
	self.table_name = "purchase"
	has_many :money_transactions, class_name: "MoneyTransaction", foreign_key: "id_purchase"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :auth_user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :country, class_name: "Country", foreign_key: 'id_country', optional: true
end
