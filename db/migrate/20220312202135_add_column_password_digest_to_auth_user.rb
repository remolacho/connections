class AddColumnPasswordDigestToAuthUser < ActiveRecord::Migration[6.1]
  def change
    add_column :auth_user, :password_digest, :string
  end
end
