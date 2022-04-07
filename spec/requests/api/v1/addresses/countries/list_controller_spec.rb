 require 'swagger_helper'

  RSpec.describe Api::V1::Addresses::Countries::ListController, type: :request do
    include_context 'addresses_stuff'

    describe 'Lista los paises' do
      path "/v1/addresses/countries/list" do
        get 'Lista de paises' do
          tags 'Connectus v1 addresses'
          description "Nos permite obtener un listado de los paises disponibles en la plataforma"
          produces 'application/json'

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
                           currency: { type: :string },
                           name: { type: :string },
                           short: { type: :string },
                           code: { type: :integer },
                           flag_emoji: { type: :string },
                           number_length: { type: :integer }
                         }
                       }
                     }
                   }

            run_test!
          end
        end
      end
    end
  end
