require 'swagger_helper'

RSpec.describe Api::V1::Sms::MsgTemplatesController, type: :request do
  include_context 'templates_stuff'

  describe 'Lista de templates' do
    path "/v1/sms/msg_templates" do
      get 'Lista los templates por usuario' do
        tags 'Connectus v1 sms'
        description "Este genera una lista de mensajes guardados por cuenta de usuario llamados templates"
        produces 'application/json'
        parameter name: 'Authorization', in: :header, required: true

        response 200, 'success!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: true },
                   data: {
                     type: :array,
                     items: {
                       type: :object,
                       properties: {
                         id: { type: :integer },
                         name: { type: :string },
                         text: { type: :string }
                       }
                     }
                   }
                 }

          let(:'Authorization') {
            templates
            sign_in
          }

          run_test!
        end

        response 403, 'Forbidden !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { 'sign_in' }

          run_test!
        end
      end
    end
  end
end


