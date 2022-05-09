require 'swagger_helper'

RSpec.describe Api::V1::Sms::SendBulkController, type: :request do
  include_context 'send_bulk_stuff'

  describe 'Envia mensajes de forma masiva' do
    path "/v1/sms/send_bulk" do
      post 'crea una transaccion para ejecutar el envio masivo en segundo plano' do
        tags 'Connectus v1 sms'
        description "Crea una transaccion para ejecutar el envio masivo en segundo plano"
        produces 'application/json'
        consumes 'application/json'
        parameter name: 'Authorization', in: :header, required: true
        parameter name: :let_send_bulk, in: :body, schema: {
          type: :object,
          properties: {
            send_bulk:{
              type: :object,
              properties: {
                name: { type: :string },
                file: { type: :string, required: true },
              }
            }
          }
        }
        response 200, 'success!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: true },
                   data: {
                     type: :object,
                     properties: {
                       token: { type: :string },
                       status: { type: :string },
                       name: { type: :string }
                    }
                   }
                 }

          let(:'Authorization') { sign_in }
          it 'is success' do;end
        end

        response 403, 'Forbidden !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { 'send_bulk' }
          run_test!
        end

        response 422, 'El archivo debe ser obligatorio !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }
          run_test!
        end
      end
    end
  end
end



