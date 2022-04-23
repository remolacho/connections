module Commons
  extend ActiveSupport::Concern

  def country
    @country ||= AddrCountry.find(params[:id_country])
  end

  def account
    @account ||= current_user.account
  end

  def current_product
    @current_product ||= Product.first
  end
end