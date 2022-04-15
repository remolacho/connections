class Api::V1::Sms::MsgTemplatesController < BaseApiController

  # GET /v1/sms/msg_templates
  def index
    templates = current_user.msg_templates.list_by_account(account)

    render json: { success: true,
                   data: ActiveModelSerializers::SerializableResource.new(templates,
                                                                          each_serializer: Sms::TemplateSerializer) }
  end
end
