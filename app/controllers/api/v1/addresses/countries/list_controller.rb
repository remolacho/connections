class Api::V1::Addresses::Countries::ListController < BaseApiController
  skip_before_action :authorized_user

  # GET /v1/addresses/countries/list
  def index
    service = Addresses::Countries.instance

    render json: { success: true, data: service.countries }
  end
end
