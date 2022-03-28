require 'swagger_helper'

RSpec.describe Api::V1::Users::RecoverPasswordController, type: :request do
  include_context 'sign_in_stuff'

  describe 'Crea un token para recuperar el password' do
    path "/v1/users/recover-password" do
      post 'Envia un email con el token de recuperacion' do
        tags 'Connectus v1 users'
        description "Se envia el email y el password para validar la autorizacion en caso de ser correcta retornara un JWT que sera usado para consumir los EPs"
        produces 'application/json'
        consumes 'application/json'
        parameter name: :recover_password, in: :body, schema: {
          type: :object,
          properties: {
            recover_password:{
              type: :object,
              properties: {
                email: { type: :string },
              }
            }
          }
        }

        response 200, 'success!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: true },
                   message: { type: :string }
                 }

          let(:recover_password) { { recover_password: { email: user.email } } }

          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(true)
          end
        end

        response 404, 'error user!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:recover_password) { { recover_password: { email: 'error' } } }

          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(false)
          end
        end

        response 422, 'invalid arguments!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:recover_password) { { recover_password: { email: '' } } }

          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(false)
          end
        end
      end
    end
  end
end
