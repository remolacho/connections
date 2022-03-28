class Api::V1::Users::RecoverPasswordController < BaseApiController
  skip_before_action :authorized_user

  # POST /v1/users/recover-password
  def create
    service = Users::RecoverPassword.new(data: allowed_params)

    render json: service.call
  end

  private

  def allowed_params
    @allowed_params ||= params.require(:recover_password).permit(:email)
  end
end
