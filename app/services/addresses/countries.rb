module Addresses
  class Countries
    include Singleton

    def countries
      @countries ||= AddrCountry.select(:id, :name, :short, :currency, :code, :flag_emoji, :number_length)
    end
  end

end
