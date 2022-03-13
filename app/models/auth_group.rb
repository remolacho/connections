# == Schema Information
#
# Table name: auth_group
#
#  id          :integer          not null, primary key
#  description :text(4294967295)
#  role        :string(512)
#
class AuthGroup < ApplicationRecord
	self.table_name = "auth_group"
end
