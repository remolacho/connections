shared_context 'multiplier_stuff' do
  include_context('balance_stuff')

  let(:country_with_many_balance) {
    country = FactoryBot.create(:addr_country)

    count_messages = (sms_multiplier[:sms_content].size.to_f / 160).ceil * 2

    FactoryBot.create_list(:msg_transaction, count_messages, :increase, account: account, country: country)
    FactoryBot.create_list(:msg_transaction, 3, :decrease, account: account, country: country)
    country
  }

  let(:sms_multiplier) {
    { sms_content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  }
end
