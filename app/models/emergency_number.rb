# == Schema Information
#
# Table name: emergency_numbers
#
#  id :integer          unsigned, not null, primary key
#  A  :string(100)
#  B  :string(100)
#  C  :string(100)
#  D  :string(100)
#  E  :string(100)
#  F  :string(100)
#  G  :string(100)
#
class EmergencyNumber < ApplicationRecord
	self.table_name = "emergency_numbers"
end
