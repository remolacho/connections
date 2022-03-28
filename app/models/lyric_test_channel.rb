# == Schema Information
#
# Table name: lyric_test_channels
#
#  id         :integer          not null, primary key
#  cel_number :bigint           not null
#  channel    :integer
#  provider   :string(512)      not null
#  status     :string(1)
#  created_at :datetime
#  updated_at :datetime
#
class LyricTestChannel < ApplicationRecord
	self.table_name = "lyric_test_channels"
end
