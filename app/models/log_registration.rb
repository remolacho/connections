# == Schema Information
#
# Table name: log_registration
#
#  id            :integer          not null, primary key
#  account_email :string(512)
#  account_name  :string(512)
#  created_at    :datetime
#
class LogRegistration < ApplicationRecord
	self.table_name = "log_registration"
end
