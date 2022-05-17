class Api::V1::Core::TransactionsController < BaseApiController

  # /v1/transactions/:token
  def show
    render json: {success: true, data: TransactionSerializer.new(transaction)}, status: :ok
  end

end
