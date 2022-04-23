module Users
  class SignUp < BaseService
    include RequestEngine

    attr_accessor :user_data

    def initialize(user_data:)
      @user_data = user_data
    end

    def call
      user = create_account.users.create!(user_params)
      create_default_number
      create_sms_free
      response = send_confirmation(user)

      { success: true, message: manage_message(response) }
    end

    private

    def create_account
      @create_account ||= Account.create!({
                                           email: user_data[:email],
                                           id_country: user_data[:country_id],
                                           name: user_data[ :enterprise_name],
                                           phone: user_data[:phone],
                                           rut: user_data[:rut],
                                           id_unique: Account.generate_unique_id
                                          })
    end

    def user_params
      {
        email: user_data[:email],
        first_name: user_data[:first_name],
        last_name: user_data[:last_name],
        password: user_data[:password],
        password_confirmation: user_data[:password_confirmation],
        phone: user_data[:phone],
        registration_key: AuthUser.generate_registration_key,
        auth_user_type: AuthUser::ROLE_ADMIN
      }
    end

    def send_confirmation(user)
      return { success: true } unless can_send_sms?

      api_url = "https://api.connectus.cl/api_v2/send_sms".freeze
      link    = "#{ENV['BASE_APP']}/auth/confirmation?token=#{user.registration_key}"

      response_post(api_url, {
        sms_content: I18n.t('services.users.sign_up.sms.content', link: link),
        dst_number: user.current_phone,
      })
    end

    def manage_message(response)
      return I18n.t('services.users.sign_up.sms.success') unless response[:error]

      if Rails.env.production?
        I18n.t('services.users.sign_up.sms.error')
      else
        response[:message]
      end
    end

    def create_default_number
      default_number = ElasticNumber.find_by!(id_account: nil)
      default_number.id_account = create_account.id
      default_number.is_default = 'T'
      default_number.save!
    end

    def create_sms_free
      create_account.msg_transactions.create!(increase: 5,
                                              msg_transaction_type: MsgTransaction::FREE,
                                              id_country: 1,
                                              id_pricing_plan: 1)
    end
  end
end
