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

  def transaction
    @transaction ||= current_user.send_bulk_transactions.find_by!(token: params[:token])
  end
end