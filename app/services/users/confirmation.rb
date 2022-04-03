module Users
  class Confirmation
    attr_accessor :user

    def initialize(user:)
      @user = user
    end

    # solo cambiando este campo a nil hace la validacion del user
    def call
      user.update!(registration_key: nil)

      { success: true, message: I18n.t('services.users.confirmation.success')}
    end
  end
end
