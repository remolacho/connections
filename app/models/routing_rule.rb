# == Schema Information
#
# Table name: routing_rule
#
#  id                 :integer          not null, primary key
#  hidden             :string(1)
#  id_account         :integer          not null
#  id_provider        :integer          not null
#  id_smpp_connection :integer          not null
#  ported             :string(1)        not null
#  created_at         :datetime
#
# Indexes
#
#  id_account__idx          (id_account)
#  id_provider__idx         (id_provider)
#  id_smpp_connection__idx  (id_smpp_connection)
#
# Foreign Keys
#
#  routing_rule_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  routing_rule_ibfk_2  (id_provider => provider.id) ON DELETE => cascade
#  routing_rule_ibfk_3  (id_smpp_connection => smpp_connection.id) ON DELETE => cascade
#
class RoutingRule < ApplicationRecord
	self.table_name = "routing_rule"
end
