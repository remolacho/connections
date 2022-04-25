class Api::V1::Sms::SendIndividualController < BaseApiController

  # POST /v1/sms/send_individual
  def create
    service = Sms::SendIndividual.new(user: current_user,
                                      account: account,
                                      country: country,
                                      product: current_product,
                                      data: allowed_params)

    render json: service.call
  end

  private

  def country
    @country = AddrCountry.find(allowed_params[:country_id])
  end

  def allowed_params
    @allowed_params ||= params.require(:send_individual).permit(:country_id,
                                                                :dst_number,
                                                                :sms_content)
  end
end
