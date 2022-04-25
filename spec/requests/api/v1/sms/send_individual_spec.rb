require 'swagger_helper'

RSpec.describe Api::V1::Sms::SendIndividualController, type: :request do
  include_context 'send_individual_stuff'

  describe 'Envia mensajes de forma individual' do
    path "/v1/sms/send_individual" do
      post 'crea un registro de envio para queluego sea enviado' do
        tags 'Connectus v1 sms'
        description "Este tiene validaciones de saldo, cantidad de carateres y formato UTF-8"
        produces 'application/json'
        consumes 'application/json'
        parameter name: 'Authorization', in: :header, required: true
        parameter name: :send_individual, in: :body, schema: {
          type: :object,
          properties: {
            send_individual:{
              type: :object,
              properties: {
                country_id: { type: :string },
                sms_content: { type: :string },
                dst_number: { type: :string }
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
                       unique_id: { type: :string }
                     }
                   }
                 }

          let(:'Authorization') { sign_in }
          let(:send_individual) {
            default_number
            current_product
            send_individual_with_balance
          }

          run_test!
        end

        response 404, 'Registro no encontrado !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }
          let(:send_individual) {
            current_product
            send_individual_with_balance[:country_id] = 10000
            send_individual_with_balance
          }
          run_test!
        end

        response 403, 'Forbidden !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { 'send_individual' }
          let(:send_individual) { send_individual_with_balance }

          run_test!
        end

        response 422, 'Texto no permido, numero vacio o texto vacio !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }

          let(:send_individual) {
            current_product
            send_individual_with_balance[:sms_content] = 'ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤ'
            send_individual_with_balance
          }

          run_test!

          let(:send_individual) {
            current_product
            send_individual_with_balance[:dst_number] = ''
            send_individual_with_balance
          }

          run_test!

          let(:send_individual) {
            current_product
            send_individual_with_balance[:sms_content] = ''
            send_individual_with_balance
          }

          run_test!
        end
      end
    end
  end
end



