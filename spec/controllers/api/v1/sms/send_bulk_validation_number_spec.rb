require 'rails_helper'

RSpec.describe Api::V1::Sms::SendBulkController, type: :controller do
  include_context 'send_bulk_stuff'

  describe 'Send message bulk' do
    context 'Validations number' do
      describe "POST #create" do

        it 'success and worker canceled number empty!!!' do
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:error_number_nil),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.row.number_nil', {num_row: 2}))

          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker canceled number not found!!!' do
          addr_countries
          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:error_number_not_found),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.contacts_bulk.verification.error.row.number_not_found', {num_row: 2}))

          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker canceled number found without balance!!!' do
          addr_countries
          country_without_balance
          country_with_balance

          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:error_number_not_balance),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.canceled?).to eq(true)
          expect(transaction.observation).to eq(I18n.t('services.sms.balance.error_row', {num_row: 3}))

          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end

        it 'success and worker completed !!!' do
          addr_countries
          country_with_balance

          request.headers['Authorization'] = sign_in
          post :create, params: send_bulk(:success),  as: :json
          body = JSON.parse(response.body)
          transaction = SendBulkTransaction.find_by!(token: body['data']['token'])
          contact_list = ContactList.find_by!(id_transaction: transaction.id)
          expect(body['success']).to eq(true)
          expect(transaction.file.attached?).to eq(true)
          expect(transaction.completed?).to eq(true)
          expect(transaction.observation).to eq(nil)
          expect(contact_list.number_of_contacts).to eq(5) # 5 son lineas reales del archivo success.csv

          transaction.file.purge
          FileUtils.remove_entry_secure('./tmp/storage/test', true)
        end
      end
    end
  end
end