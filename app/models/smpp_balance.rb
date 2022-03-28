# == Schema Information
#
# Table name: smpp_balance
#
#  id              :integer          not null, primary key
#  balance         :integer
#  id_smpp_account :integer
#  created_at      :datetime
#
# Indexes
#
#  id_smpp_account__idx  (id_smpp_account)
#  smpp_balance_idx      (created_at)
#
# Foreign Keys
#
#  smpp_balance_ibfk_1  (id_smpp_account => smpp_account.id) ON DELETE => cascade
#
class SmppBalance < ApplicationRecord
	self.table_name = "smpp_balance"
end
