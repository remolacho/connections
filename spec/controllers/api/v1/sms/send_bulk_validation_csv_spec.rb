require 'rails_helper'

RSpec.describe Api::V1::Sms::SendBulkController, type: :controller do
  include_context 'send_bulk_stuff'

  describe 'Send message bulk' do
    context 'Verification' do
      describe "POST #create" do
        it 'error ext!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:ext_error),  as: :json
          body = JSON.parse(response.body)
          expect(body['success']).to eq(false)
        end

        it 'success and worker canceled by separator!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:separator_error),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.separator'))
          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker canceled by header long!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:header_long_error),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.header.too_long'))
          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker canceled by header phone name error!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:header_phone_error),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.header.phone'))
          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker canceled by elements row greater to header!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:error_row_greater_to_header),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.row.size', {num_row: 2}))
          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

      end
    end
  end
end