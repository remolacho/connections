class AuthUserInvitation < ApplicationRecord
	self.table_name = "auth_user_invitation"
	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
end