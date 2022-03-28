class Api::V1::Users::SignInController < BaseApiController
  skip_before_action :authorized_user

  # POST /v1/users/signIn
  def create
    service = Users::SignIn.new(credentials: allowed_params)

    render json: service.call
  end

  private

  def allowed_params
    @allowed_params ||= params.require(:sign_in).permit(:email, :password)
  end
end
