shared_context 'sign_in_stuff' do
  let(:account) { FactoryBot.create(:account) }
  let(:user) { FactoryBot.create(:auth_user, account: account, email: account.email) }
end
