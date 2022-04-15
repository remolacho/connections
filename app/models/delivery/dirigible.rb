class Delivery
  module Dirigible
    extend ActiveSupport::Concern

    PLATFORM = 'PLATFORM'.freeze
    API = 'API'.freeze

    included do
      def self.assign_name_platform_sms(user)
        "Uso PLATAFORMA - SMS, #{user.first_name} #{user.last_name}, mes de #{current_month}"
      end

      def self.assign_name_api_sms(user)
        "Uso API - SMS, #{user.first_name} #{user.last_name}, mes de #{current_month}"
      end

      def self.current_month
        months[Date.today.month.to_i]
      end

      def self.months
        { 1 => 'Enero',
          2 => 'Febrero',
          3 => 'Marzo',
          4 => 'Abril',
          5 => 'Mayo',
          6 => 'Junio',
          7 => 'Julio',
          8 => 'Agosto',
          9 => 'Septiembre',
          10 => 'Octubre',
          11 => 'Noviembre',
          12 => 'Diciembre' }
      end
    end

  end
end
