class Api::V1::Addresses::Countries::ListController < BaseApiController
  skip_before_action :authorized_user

  # GET /v1/addresses/countries/list
  def index
    render json: { success: true, data: AddrCountry.select(:id,
                                                           :name,
                                                           :short,
                                                           :currency,
                                                           :code,
                                                           :flag_emoji,
                                                           :number_length) }
  end
end
