shared_context 'delivery_stuff' do
  let(:delivery_platform_sms) {
    FactoryBot.create(:delivery,
                      :platform_sms,
                      auth_user: current_user,
                      account: account,
                      product: current_product)
  }

  let(:delivery_platform_sms_due_date) {
    FactoryBot.create(:delivery,
                      :platform_sms_due_date,
                      auth_user: current_user,
                      account: account,
                      product: current_product)
  }
end
