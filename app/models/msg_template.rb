# == Schema Information
#
# Table name: msg_template
#
#  id                  :integer          not null, primary key
#  answer_to           :text(4294967295)
#  id_account          :integer
#  id_auth_user        :integer
#  id_elastic_number   :integer
#  id_product          :integer
#  is_automatic_answer :string(1)
#  is_default          :string(1)
#  name                :string(512)
#  template_text       :text(4294967295)
#  created_at          :datetime
#  updated_at          :datetime
#
# Indexes
#
#  id_account__idx         (id_account)
#  id_auth_user__idx       (id_auth_user)
#  id_elastic_number__idx  (id_elastic_number)
#  id_product__idx         (id_product)
#
# Foreign Keys
#
#  msg_template_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  msg_template_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#  msg_template_ibfk_3  (id_product => product.id) ON DELETE => cascade
#  msg_template_ibfk_4  (id_elastic_number => elastic_number.id) ON DELETE => cascade
#
class MsgTemplate < ApplicationRecord
	self.table_name = "msg_template"

	belongs_to :user, class_name: "AuthUser", foreign_key: 'id_auth_user', optional: true
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :product, class_name: "Product", foreign_key: 'id_product', optional: true

	scope :list_by_account, ->(account) { where(id_account: account.id, id_product: 1) }
end
