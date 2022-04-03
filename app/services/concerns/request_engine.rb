# frozen_string_literal: true

module RequestEngine
  extend ActiveSupport::Concern

  attr_accessor :authorization

  private

  def response_get(api_url, authorization = nil)
    response = ::RestClient.get(api_url, headers(authorization))

    JSON.parse(response.body, symbolize_names: true)
  rescue StandardError => e
    response_error(e)
  end

  def response_post(api_url, body, authorization = nil)
    response = ::RestClient::Request.execute(method: :post,
                                             url: api_url,
                                             payload: body,
                                             headers: headers(authorization),
                                             ssl_ciphers: false,
                                             proxy: nil)

    JSON.parse(response.body, symbolize_names: true)
  rescue StandardError => e
    response_error(e)
  end

  def response_error(e)
    message = e.try(:response) ? e.response.body : e.to_s

    { error: true, message: message}
  end

  def headers(authorization = nil)
    {
      content_type: 'application/x-www-form-urlencoded'.freeze,
      authorization: authorization || Account.authorization_sms,
    }
  end
end
