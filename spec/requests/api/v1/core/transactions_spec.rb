require 'swagger_helper'

RSpec.describe Api::V1::Core::TransactionsController, type: :request do
  include_context 'send_bulk_stuff'

  describe 'Retorna el estado de una trasaccion' do
    path "/v1/transactions/{token}" do
      get 'Se envia el token generado y esta retorna la info de la trnsaccion' do
        tags 'Connectus v1 core'
        description 'Se envia el token generado y esta retorna la info de la trnsaccion enviada en segundo plano
 <br>los estados manejados son:
<ul>
  <li>unstarted</li>
  <li>in_progress</li>
  <li>completed</li>
  <li>canceled</li>
</ul>
 el atributo observation: retorna las inquietudes que hubo en el proceso
 <br>atributo resource_token: retorna el id unique del recurso padre que implemento la trasaccion'
        produces 'application/json'
        parameter name: 'Authorization', in: :header, required: true
        parameter name: :token, in: :path, required: true
        response 200, 'success completed!!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: true },
                   data: {
                     type: :object,
                     properties: {
                       token: { type: :string },
                       status: { type: :string },
                       name: { type: :string },
                       queue: { type: :string, nullable: true },
                       observation: { type: :string, nullable: true },
                       resource_token: { type: :string, nullable: true }
                   }
                   }
                 }

          let(:'Authorization') { sign_in }

          let(:token){
            addr_countries
            country_with_balance

            allowed_params = send_bulk(:success)[:send_bulk]

            params = {
              name: allowed_params[:name],
              file: allowed_params[:file]
            }

            transaction = Contacts::SendBulk.new(user: current_user, account: account, data: params).call
            transaction.token
          }

          run_test! do |response|
            body = JSON.parse(response.body)
            expect(body['data']['status']).to eq('completed')
          end
        end

        response 403, 'Forbidden !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { 'send_bulk' }
          let(:token){ 'forbidden' }
          run_test!
        end

        response 404, 'la trasaccion no existe !!!' do
          schema type: :object,
                 properties: {
                   success: { type: :boolean, default: false },
                   message: { type: :string }
                 }

          let(:'Authorization') { sign_in }
          let(:token){ 'error' }
          run_test!
        end
      end
    end
  end
end
