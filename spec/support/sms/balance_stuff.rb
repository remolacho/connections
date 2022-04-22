shared_context 'balance_stuff' do

  let(:country_with_balance) {
    country = FactoryBot.create(:addr_country)
    FactoryBot.create_list(:msg_transaction, 4, :increase, account: account, country: country)
    FactoryBot.create_list(:msg_transaction, 3, :decrease, account: account, country: country)
    country
  }

  let(:country_without_balance) {
    country = FactoryBot.create(:addr_country)
    FactoryBot.create_list(:msg_transaction, 3, :increase, account: account, country: country)
    FactoryBot.create_list(:msg_transaction, 3, :decrease, account: account, country: country)
    country
  }
end
