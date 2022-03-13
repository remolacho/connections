# == Schema Information
#
# Table name: log_mnp_lookup
#
#  id           :integer          not null, primary key
#  account_name :string(512)
#  numbers      :text(4294967295)
#  created_at   :datetime
#
class LogMnpLookup < ApplicationRecord
	self.table_name = "log_mnp_lookup"
end
