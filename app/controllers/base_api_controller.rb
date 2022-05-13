class BaseApiController < ApplicationController
  include AuthJwtGo
  include ManageException
  include Commons

  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  before_action :authorized_user
  
  def meta_data_pagination(resource)
    meta_data = {}
    meta_data[:current_page] = resource.current_page
    meta_data[:total_pages] = resource.total_pages
    meta_data
  end
end
