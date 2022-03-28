class Api::V1::Users::ChangePasswordController < BaseApiController
  skip_before_action :authorized_user

  # POST /v1/users/change-password
  def create
    service = Users::ChangePassword.new(data: allowed_params)
    render json: service.call
  end

  private

  def allowed_params
    @allowed_params ||= params.require(:change_password).permit(:recover_token,
                                                                 :password,
                                                                 :password_confirmation)
  end
end
