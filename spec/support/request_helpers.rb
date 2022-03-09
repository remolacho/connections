module RequestHelpers
  extend ActiveSupport::Concern
  include AuthJwtGo

  private

  def sign_in
    payload =  {}

    "Bearer #{encode_token(payload).dig(:jwt)}"
  end
end
