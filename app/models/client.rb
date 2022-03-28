# == Schema Information
#
# Table name: client
#
#  id         :integer          not null, primary key
#  avatar     :string(512)
#  deleted    :string(1)
#  id_account :integer
#  id_unique  :string(8)        not null
#  name       :string(512)
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  id_account__idx  (id_account)
#  id_unique        (id_unique) UNIQUE
#
# Foreign Keys
#
#  client_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class Client < ApplicationRecord
	self.table_name = "client"
end
