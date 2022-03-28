# == Schema Information
#
# Table name: smpp_connection
#
#  id         :integer          not null, primary key
#  dst_format :string(512)
#  name       :string(512)
#  src_number :bigint
#  tag        :integer
#  created_at :datetime
#  updated_at :datetime
#
class SmppConnection < ApplicationRecord
	self.table_name = "smpp_connection"
end
