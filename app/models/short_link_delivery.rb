# == Schema Information
#
# Table name: short_link_delivery
#
#  id            :integer          not null, primary key
#  id_account    :integer
#  id_delivery   :integer
#  id_short_link :integer
#
# Indexes
#
#  id_account__idx     (id_account)
#  id_delivery__idx    (id_delivery)
#  id_short_link__idx  (id_short_link)
#
class ShortLinkDelivery < ApplicationRecord
	self.table_name = "short_link_delivery"
end
