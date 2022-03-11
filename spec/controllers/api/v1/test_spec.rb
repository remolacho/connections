require 'rails_helper'

RSpec.describe Api::V1::TestController, type: :controller do
  describe 'Primer EP para testear' do
    describe "GET #index" do
      it 'success!!!' do
        get :index, params: { is_error: false }
        body = JSON.parse(response.body)
        expect(response.status).to eq(200)
        expect(body['success']).to eq(true)
      end

      it 'error!!!' do
        get :index, params: { is_error: true }
        body = JSON.parse(response.body)
        expect(response.status).to eq(404)
        expect(body['success']).to eq(false)
      end
    end
  end
end
