shared_context 'sign_up_stuff' do
  let(:country) { FactoryBot.create(:addr_country) }
  let(:user) { current_user }

  let(:new_user){
    {
      email: "test@conectus.com",
      first_name: "test1",
      last_name: "test2",
      password: "test12345",
      password_confirmation: "test12345",
      phone: "3174131149",
      country_id: country.id,
      rut: "1110602917",
      enterprise_name: "test enterprise"
    }
  }

end

