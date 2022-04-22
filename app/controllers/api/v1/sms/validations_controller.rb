class Api::V1::Sms::ValidationsController < BaseApiController

  # GET /v1/sms/validations/balance?id_country=
  def balance
    render json: Sms::Balance.new(user: current_user, account: account, country: country).call
  end
end
