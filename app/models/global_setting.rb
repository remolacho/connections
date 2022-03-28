# == Schema Information
#
# Table name: global_settings
#
#  id                :integer          not null, primary key
#  emergency_reroute :string(1)
#
class GlobalSetting < ApplicationRecord
	self.table_name = "global_settings"
end
