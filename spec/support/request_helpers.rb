module RequestHelpers
  extend ActiveSupport::Concern
  include AuthJwtGo

  private

  def sign_in
    "Bearer #{encode_token(payload).dig(:jwt)}"
  end

  def payload
    {
      api: 'Connectus API',
      user: {
        id: user.id,
        last_login: user.last_login,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      },
      exp: (Time.now + 1.day).to_i
    }
  end
end
