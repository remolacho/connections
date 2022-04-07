require 'swagger_helper'

RSpec.describe Api::V1::Users::SignUpController , type: :request do
  include_context 'sign_up_stuff'

    describe 'Crear la cuenta d eusuario' do
      path "/v1/users/signUp" do
        post 'Creara un usuario' do
          tags 'Connectus v1 users'
          description "crea un usuario el cual puede ingresar al sistema luego de su valicdacion via SNS"
          produces 'application/json'
          consumes 'application/json'
          parameter name: :sign_up, in: :body, schema: {
            type: :object,
            properties: {
              sign_up:{
                type: :object,
                properties: {
                  email: { type: :string },
                  first_name: { type: :string },
                  last_name: { type: :string },
                  password: { type: :string },
                  password_confirmation: { type: :string },
                  phone: { type: :string },
                  country_id: { type: :integer },
                  rut: { type: :string },
                  enterprise_name: { type: :string }
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

            let(:sign_up) { { sign_up:  new_user  } }

            run_test!
          end

          response 401, 'Email unique, campos obligatorios!!!' do
            schema type: :object,
                   properties: {
                     success: { type: :boolean, default: false },
                     message: { type: :string }
                   }

            let(:sign_up) {
              new_user[:email] = user.email

              { sign_up:  new_user  }
            }

            run_test!
          end

        end
      end
    end
end
