require 'swagger_helper'

RSpec.describe Api::V1::Sms::ValidationsController, type: :request do
  include_context 'balance_stuff'

  describe 'validación de saldo' do
    path "/v1/sms/validations/balance" do
      get 'valida si posee saldo' do
        tags 'Connectus v1 sms'
        description "Revisar que se tenga saldo de al menos 1 mensaje de salida"
        produces 'application/json'
        parameter name: 'Authorization', in: :header, required: true
        parameter name: :id_country, in: :query, required: true

        response 200, 'success!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: true },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }
          let(:id_country) { country_with_balance.id }

          run_test!
        end

        response 403, 'Forbidden !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { 'sign_in' }
          let(:id_country) { country_without_balance.id }

          run_test!
        end

        response 404, 'error not balance!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }
          let(:id_country) { country_without_balance.id }

          run_test!
        end
      end
    end
  end
end

