class Api::V1::Users::SignUpController < BaseApiController
  skip_before_action :authorized_user

  # POST /v1/users/signUp
  def create
    service = Users::SignUp.new(user_data: allowed_params)
    render json: service.call
  end

  private

  def allowed_params
    @allowed_params ||= params.require(:sign_up).permit(:email,
                                                        :first_name,
                                                        :last_name,
                                                        :password,
                                                        :password_confirmation,
                                                        :phone,
                                                        :country_id,
                                                        :enterprise_name,
                                                        :rut)
  end
end
