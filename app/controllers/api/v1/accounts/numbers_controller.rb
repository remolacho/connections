class Api::V1::Accounts::NumbersController < BaseApiController
  def index
    numbers = account.numbers

    render json: {
      success: true,
      data: numbers
    }, status: 200
  end
end