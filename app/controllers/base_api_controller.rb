class BaseApiController < ApplicationController
  include AuthJwtGo
  include ManageException

  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  before_action :authorized_user
end
