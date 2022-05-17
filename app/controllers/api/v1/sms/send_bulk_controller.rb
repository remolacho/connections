class Api::V1::Sms::SendBulkController < BaseApiController
  before_action :valid_file

  # POST /v1/sms/send_bulk
  def create
    transaction = Contacts::SendBulk.new(user: current_user, account: account, data: allowed_params).call
    render json: {success: true, data: TransactionSerializer.new(transaction)}, status: :ok
  end

  private

  def valid_file
    raise ArgumentError, I18n.t('controllers.sms_bulk.error.file_empty') unless allowed_params[:file].present?
    raise ArgumentError, I18n.t('controllers.sms_bulk.error.file_ext') unless allowed_params[:file].original_filename.split('.').last.eql?('csv')
  end

  def allowed_params
    @allowed_params ||= params.require(:send_bulk).permit(:name, :file)
  end
end
