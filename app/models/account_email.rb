# == Schema Information
#
# Table name: account_email
#
#  id               :integer          not null, primary key
#  email            :string(512)      not null
#  id_account       :integer
#  is_default       :string(1)
#  verification_key :string(512)      not null
#  verified         :string(1)
#  created_at       :datetime
#  updated_at       :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  account_email_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class AccountEmail < ApplicationRecord
	self.table_name = "account_email"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end
