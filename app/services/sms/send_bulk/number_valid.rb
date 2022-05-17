require 'csv'

module Sms
  module SendBulk
    class NumberValid

      attr_accessor :user, :account, :countries

      def initialize(user:, account:)
        @account = account
        @user = user
        @countries = AddrCountry.all
      end

      def call(number:, i_row:)
        @number = number
        @i_row  = i_row

        unless @number.present?
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.row.number_nil', {num_row: i_row})
        end

        current_country = country

        unless current_country.present?
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.row.number_not_found', {num_row: i_row})
        end

        {success: true, number: number, country: current_country}
      end

      private
      
      def country
        [0, 1, 2].each do |i|
          length = number_length(i+1) # se aunmenta 1 para saber la longitud del code no puede partir de 0
          num_code = code(i)
          c = countries.detect{|c| c.code == num_code && c.number_length == length }
          return c if c.present?
        end

        nil
      end

      def code(index)
        @number[0..index].to_i
      end

      def number_length(num_code)
        @number.size - num_code
      end
    end
  end
end
