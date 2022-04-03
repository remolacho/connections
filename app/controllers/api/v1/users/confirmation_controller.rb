class Api::V1::Users::ConfirmationController < BaseApiController
  skip_before_action :authorized_user

  # POST /v1/users/confirmation
  def create
    service = Users::Confirmation.new(user: user)

    render json: service.call
  end

  private

  def allowed_params
    @allowed_params ||= params.require(:confirmation).permit(:token)
  end

  def user
    raise ArgumentError, I18n.t('api.users.confirmation.token_empty') unless allowed_params[:token].present?

    AuthUser.find_by!(registration_key: allowed_params[:token])
  end
end
