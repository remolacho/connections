# == Schema Information
#
# Table name: auth_user_invitation
#
#  id             :integer          not null, primary key
#  email          :string(512)
#  id_account     :integer
#  invitation_key :string(512)      not null
#  user_type      :string(512)
#
# Indexes
#
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  auth_user_invitation_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class AuthUserInvitation < ApplicationRecord
	self.table_name = "auth_user_invitation"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end
