class AddColumnIsMigrateToAuthUser < ActiveRecord::Migration[6.1]
  def change
    add_column :auth_user, :is_migrated, :boolean, default: true

    AuthUser.update_all(is_migrated: false)
  end
end
