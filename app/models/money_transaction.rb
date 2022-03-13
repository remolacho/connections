# == Schema Information
#
# Table name: money_transaction
#
#  id           :integer          not null, primary key
#  credit       :integer
#  debit        :integer
#  id_account   :string(512)      not null
#  id_auth_user :integer
#  id_purchase  :string(512)      not null
#  created_at   :datetime
#  updated_at   :datetime
#
# Indexes
#
#  id_auth_user__idx  (id_auth_user)
#
# Foreign Keys
#
#  money_transaction_ibfk_1  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class MoneyTransaction < ApplicationRecord
	self.table_name = "money_transaction"
end
