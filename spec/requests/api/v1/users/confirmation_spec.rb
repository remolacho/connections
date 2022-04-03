require 'swagger_helper'

RSpec.describe Api::V1::Users::ConfirmationController, type: :request do
  include_context 'sign_up_stuff'

  describe 'Hace la validacion del user para su activación' do
    path "/v1/users/confirmation" do
      post 'Retorna una confirmación de la acción' do
        tags 'Connectus v1 users'
        description "Este EP valoida si el token es valido y activa al usuario registrado"
        produces 'application/json'
        consumes 'application/json'
        parameter name: :confirmation, in: :body, schema: {
          type: :object,
          properties: {
            confirmation:{
              type: :object,
              properties: {
                token: { type: :string }
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

          let(:confirmation) {
            user.registration_key = AuthUser.generate_registration_key
            user.save!

            { confirmation: { token: user.registration_key } }
          }

          run_test! do |response|
            current_user = user
            expect(current_user.registration_key.nil?).to eq(false)

            body = JSON.parse(response.body)

            current_user = user.reload
            expect(body['success']).to eq(true)
            expect(current_user.registration_key.nil?).to eq(true)
          end
        end

        response 422, 'token empty!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:confirmation) { { confirmation: { token: user.registration_key } } }

          run_test!
        end

        response 404, 'token not found!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:confirmation) { { confirmation: { token: 'other-token'} } }

          run_test!
        end
      end
    end
  end
end

