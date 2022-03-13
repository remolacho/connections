# == Schema Information
#
# Table name: provider
#
#  id            :integer          not null, primary key
#  MCC           :integer
#  MNC           :integer
#  id_country    :integer
#  provider_code :integer
#  provider_name :string(512)      not null
#
class Provider < ApplicationRecord
	self.table_name = "provider"
end
