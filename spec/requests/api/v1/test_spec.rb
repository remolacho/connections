require 'swagger_helper'

RSpec.describe Api::V1::TestController, type: :request do
  describe 'Retorna un json dummy para la prueba del setting API DOC' do
    path "/v1/test" do
      get 'Retorna un json dummy para la prueba del setting API DOC' do
        tags 'Proveedores v1 categories'
        description "Retorna un json dummy para la prueba del setting API DOC"
        produces 'application/json'
        parameter name: :is_error, in: :query, required: false

        response 200, 'success!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean },
                   data: {
                     type: :object,
                     properties: {
                       id: { type: :integer },
                       name: { type: :string }
                     }
                   }
                 }

          run_test!
        end

        response 404, 'error!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:is_error) { 'true' }

          run_test!
        end
      end
    end
  end
end
