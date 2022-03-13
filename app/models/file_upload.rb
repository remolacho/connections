# == Schema Information
#
# Table name: file_upload
#
#  id              :integer          not null, primary key
#  file_type       :string(512)      not null
#  hash_short_link :string(512)      not null
#  id_account      :integer
#  id_auth_user    :integer
#  name            :string(512)      not null
#  uploaded_file   :string(512)
#  created_at      :datetime
#  updated_at      :datetime
#
# Indexes
#
#  id_account__idx    (id_account)
#  id_auth_user__idx  (id_auth_user)
#
# Foreign Keys
#
#  file_upload_ibfk_1  (id_account => account.id) ON DELETE => cascade
#  file_upload_ibfk_2  (id_auth_user => auth_user.id) ON DELETE => cascade
#
class FileUpload < ApplicationRecord
	self.table_name = "file_upload"
end
