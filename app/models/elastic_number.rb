# == Schema Information
#
# Table name: elastic_number
#
#  id             :integer          not null, primary key
#  elastic_number :bigint           not null
#  id_account     :integer
#  id_country     :integer
#  is_default     :string(1)
#  created_at     :datetime
#  updated_at     :datetime
#
# Indexes
#
#  elastic_number   (elastic_number) UNIQUE
#  id_account__idx  (id_account)
#
# Foreign Keys
#
#  elastic_number_ibfk_1  (id_account => account.id) ON DELETE => cascade
#
class ElasticNumber < ApplicationRecord
	self.table_name = "elastic_number"

	belongs_to :account, class_name: "Account", foreign_key: 'id_account', optional: true
	belongs_to :country, class_name: "AddrCountry", foreign_key: 'id_country'
end
