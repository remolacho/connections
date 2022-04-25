shared_context 'send_individual_stuff' do
  include_context('multiplier_stuff')

  let(:default_number) { FactoryBot.create(:elastic_number, :with_account, account: account) }

  # multiplier_stuff -> country_with_many_balance
  # multiplier_stuff -> sms_multiplier
  let(:send_individual_with_balance) {
    {
      country_id: country_with_many_balance.id,
      dst_number: ENV['DST_PHONE'],
    }.merge!(sms_multiplier)
  }

  # multiplier_stuff -> balance_stuff -> country_without_balance
  # multiplier_stuff -> sms_multiplier
  let(:send_individual_without_balance) {
    {
      country_id: country_with_many_balance.id,
      dst_number: ENV['DST_PHONE'],
    }.merge!(sms_multiplier)
  }
end
