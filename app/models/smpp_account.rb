# == Schema Information
#
# Table name: smpp_account
#
#  id              :integer          not null, primary key
#  currency        :string(512)
#  id_account      :integer
#  jasmin_password :string(512)      not null
#  jasmin_username :string(512)      not null
#  rate            :float(53)
#  created_at      :datetime
#  updated_at      :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  smpp_account_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class SmppAccount < ApplicationRecord
	self.table_name = "smpp_account"
end
