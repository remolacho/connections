class Api::V1::TestController < BaseApiController
  skip_before_action :authorized_user

  # api_v1_test_index GET /v1/test
  def index
    if params[:is_error] == 'true'
      render json: {success: false, message: 'error test'}, status: 404 and return
    end

    TestWorker.perform_async
    render json: {success: true, data: {id: 1, name: 'test'}}
  end
end
