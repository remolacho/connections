# == Schema Information
#
# Table name: image_upload
#
#  id           :integer          not null, primary key
#  id_account   :integer
#  id_auth_user :integer
#  image        :string(512)
#  name         :string(512)
#  created_at   :datetime
#  updated_at   :datetime
#
# Indexes
#
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#
# Foreign Keys
#
#  image_upload_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  image_upload_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class ImageUpload < ApplicationRecord
	self.table_name = "image_upload"
end
