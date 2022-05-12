class Api::V1::Sms::IncomingController < BaseApiController
  include ActionView::Rendering

  before_action :set_all_incoming_sms, only: [:index, :download_report]

  def index
    if params[:account_number].present?
      incoming_sms = @all_incoming_sms.where(dst_number: params[:account_number])
    else
      incoming_sms = @all_incoming_sms
    end

    # searching
    if params[:search]
      incoming_sms = incoming_sms.where(id_unique: params[:search]) || incoming_sms.where(src_number: params[:search]) || incoming_sms.where(src_provider: params[:search])
    end

    # ordering
    incoming_sms = incoming_sms.order(created_at: :desc)

    # pagination
    incoming_sms = incoming_sms.page(params[:page])

    render json: {
      success: true,
      data: incoming_sms,
      meta_data: meta_data_pagination(incoming_sms)
    }, status: 200
  end

  def show
    message = account.incoming_sms.find_by(id_unique: params[:id])

    render json: {
      success: true,
      data: message
    }, status: 200
  end

  def download_report
    respond_to do |format|
      format.xlsx { render xlsx: 'api/v1/sms/incoming/download_report', serializer: nil, filename: "Reporte_de_recibididos_#{Date.today.strftime("%d-%m-%Y")}.xlsx" }
    end
  end

  private
  def set_all_incoming_sms
    @all_incoming_sms = account.incoming_sms
  end

  def render_to_body(options)
    _render_to_body_with_renderer(options) || super
  end
end
