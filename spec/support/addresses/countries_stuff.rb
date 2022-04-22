shared_context 'countries_stuff' do
  let!(:countries) { FactoryBot.create_list(:addr_country, 3) }
  let(:country) { FactoryBot.create(:addr_country) }
end