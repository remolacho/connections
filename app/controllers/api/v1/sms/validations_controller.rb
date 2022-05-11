class Api::V1::Sms::ValidationsController < BaseApiController

  # GET /v1/sms/validations/balance?id_country=
  def balance
    render json: Sms::Balance::Account.new(user: current_user, account: account, country: country).call
  end

  # GET /v1/sms/validations/outgoing?id_unique=
  def outgoing
    outgoing = SmsOutgoing.find_by(id_unique: params[:id_unique])
    render json: { success: true, data: outgoing }
  end
end
