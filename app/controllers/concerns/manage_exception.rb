module ManageException
  extend ActiveSupport::Concern

  included do
    rescue_from ArgumentError, with: :argument_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    rescue_from PolicyException, with: :forbidden
    rescue_from NoMethodError, with: :not_method_error
    rescue_from ActiveRecord::NotNullViolation, with: :not_found
    rescue_from(ActionController::ParameterMissing) do |missing_exception|
      render json: { success: false,
                     message: I18n.t('exceptions.parameter_missing', field: missing_exception) },
                     status: :bad_request
    end
  end

  private

  def not_method_error(invalid)
    render json: { success: false, message: invalid.to_s }, status: 500
  end

  def not_found(invalid)
    render json: { success: false, message: invalid.to_s }, status: :not_found
  end

  def record_invalid(invalid)
    render json: {success: false, message: invalid.record.errors.messages.values.join(',') }, status: 401
  end

  def forbidden(invalid)
    render json: {success: false, message: I18n.t('exceptions.forbidden', message: invalid) }, status: 403
  end

  def argument_error(invalid)
    render json: {success: false, message: invalid.to_s }, status: :unprocessable_entity
  end
end