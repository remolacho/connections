# == Schema Information
#
# Table name: auth_membership
#
#  id       :integer          not null, primary key
#  group_id :integer
#  user_id  :integer
#
# Indexes
#
#  group_id__idx  (group_id)
#  user_id__idx   (user_id)
#
# Foreign Keys
#
#  auth_membership_ibfk_1  (user_id => auth_user.id) ON DELETE => cascade
#  auth_membership_ibfk_2  (group_id => auth_group.id) ON DELETE => cascade
#
class AuthMembership < ApplicationRecord
	self.table_name = "auth_membership"
end
