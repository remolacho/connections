class AddColumnResetPasswordKeyExpiresAtToAuthUser < ActiveRecord::Migration[6.1]
  def change
    add_column :auth_user, :reset_password_key_expires_at, :datetime, default: nil
  end
end
