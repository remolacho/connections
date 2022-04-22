shared_context 'templates_stuff' do
  let(:templates) { FactoryBot.create_list(:msg_template, 4, product: current_product, user: current_user, account: account) }
end
