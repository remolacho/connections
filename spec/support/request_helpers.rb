module RequestHelpers
  extend ActiveSupport::Concern

  private

  def sign_in
    AuthJwt::Build.new(user: current_user).call[:jwt]
  end

  def current_user
    @current_user ||= FactoryBot.create(:auth_user, account: account, email: account.email)
  end

  def account
    @account ||= FactoryBot.create(:account)
  end

  def current_product
    @current_product ||= FactoryBot.create(:product)
  end
end
