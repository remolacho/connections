class BaseService

  private

  def can_send_sms?
    !Rails.env.test? || (Rails.env.test? && ENV['SEND_SMS'].eql?('true'))
  end
end
