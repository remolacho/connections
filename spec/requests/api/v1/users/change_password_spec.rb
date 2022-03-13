require 'swagger_helper'

RSpec.describe Api::V1::Users::ChangePasswordController, type: :request do
  include_context 'sign_in_stuff'

  describe 'Hace el cambio de password' do
    path "/v1/users/change-password" do
      post 'Retorna una confirmación de la acción' do
        tags 'Connectus v1 users'
        description "Este EP valoida si el token aun esta vivo y cambia la contraseña anterior por la nueva"
        produces 'application/json'
        consumes 'application/json'
        parameter name: :change_password, in: :body, schema: {
          type: :object,
          properties: {
            change_password:{
              type: :object,
              properties: {
                recover_token: { type: :string },
                password: { type: :string },
                password_confirmation: { type: :string },
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

          let(:change_password) {
            user.generate_password_token!(1.day.from_now)
            user.reload

            {
              change_password: {
                recover_token: user.reset_password_key,
                password: 'new-password',
                password_confirmation: 'new-password'
              }
            }
          }

          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(true)
          end
        end

        response 401, 'invalid password no match!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:change_password) {
            user.generate_password_token!(1.day.from_now)
            user.reload

            {
              change_password: {
                recover_token: user.reset_password_key,
                password: 'new-password',
                password_confirmation: 'new-password-1'
              }
            }
          }
          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(false)
          end
        end

        response 403, 'error token expired!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:change_password) {
            user.generate_password_token!(-1.day.from_now)
            user.reload

            {
              change_password: {
                recover_token: user.reset_password_key,
                password: 'new-password',
                password_confirmation: 'new-password'
              }
            }
          }

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

          let(:change_password) {
            user.generate_password_token!(1.day.from_now)
            user.reload

            {
              change_password: {
                recover_token: user.reset_password_key,
                password: 'new-password',
                password_confirmation: ''
              }
            }
          }
          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['success']).to eq(false)
          end
        end
      end
    end
  end
end

