require 'swagger_helper'

RSpec.describe Api::V1::Users::SignInController, type: :request do
  include_context 'sign_in_stuff'

    describe 'Crear el jwt para el auth' do
      path "/v1/users/signIn" do
        post 'Retorna un JWT que sera valido durante 1 day' do
          tags 'Connectus v1 users'
          description "Se envia el email y el password para validar la autorizacion en caso de ser correcta retornara un JWT que sera usado para consumir los EPs"
          produces 'application/json'
          consumes 'application/json'
          parameter name: :credentials, in: :body, schema: {
            type: :object,
            properties: {
              sign_in:{
                type: :object,
                properties: {
                  email: { type: :string },
                  password: { type: :string }
                }
              }
            }
          }

          response 200, 'success!!!' do
            schema type: :object,
                   properties: {
                     success: { type: :boolean, default: true },
                     jwt: { type: :string }
                   }

            let(:credentials) {
              {
                sign_in: { email: user.email, password: 'test12345'.freeze }
              }
            }

            run_test! do |response|
              body = JSON.parse(response.body)
              expect(body['success']).to eq(true)
              expect(body['jwt'].present?).to eq(true)
            end
          end

          response 403, 'error password!!!' do
            schema type: :object,
                   properties: {
                     success: { type: :boolean, default: false },
                     message: { type: :string }
                   }

            let(:credentials) {
              {
                sign_in: { email: user.email, password: 'error'.freeze }
              }
            }

            run_test! do |response|
              body = JSON.parse(response.body)
              expect(body['success']).to eq(false)
              expect(body['jwt'].present?).to eq(false)
            end
          end

          response 422, 'invalid arguments!!!' do
            schema type: :object,
                   properties: {
                     success: { type: :boolean, default: false },
                     message: { type: :string }
                   }

            let(:credentials) {
              {
                sign_in: { email: '', password: 'error'.freeze }
              }
            }

            run_test! do |response|
              body = JSON.parse(response.body)
              expect(body['success']).to eq(false)
              expect(body['jwt'].present?).to eq(false)
            end
          end
        end
      end
    end
end
