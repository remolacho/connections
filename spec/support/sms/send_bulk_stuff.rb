shared_context 'send_bulk_stuff' do
  include_context 'addr_countries_stuff'

  let(:let_send_bulk){ send_bulk(:success) }
  let(:addr_countries) { AddrCountry.insert_all(all_countries) }

  def send_bulk(key)
    {
      send_bulk: {
        name: 'test upload',
        file: load_file(key)
      }
    }
  end


  let(:country_with_balance) {
    country = AddrCountry.find_by(code: 1)
    FactoryBot.create_list(:msg_transaction, 4, :increase, account: account, country: country)
    FactoryBot.create_list(:msg_transaction, 3, :decrease, account: account, country: country)
  }

  let(:country_without_balance) {
    country = AddrCountry.find_by(code: 56)
    FactoryBot.create_list(:msg_transaction, 3, :increase, account: account, country: country)
    FactoryBot.create_list(:msg_transaction, 3, :decrease, account: account, country: country)
  }

  def load_file(key)
    Rack::Test::UploadedFile.new(files[key] , 'text/csv')
  end

  def files
    @files ||= {
      success: './spec/files/sms_bulk/success.csv',
      separator_error: './spec/files/sms_bulk/separator_error.csv',
      header_long_error: './spec/files/sms_bulk/header_long_error.csv',
      header_phone_error: './spec/files/sms_bulk/header_phone_error.csv',
      error_row_greater_to_header: './spec/files/sms_bulk/error_row_greater_to_header.csv',
      error_number_nil: './spec/files/sms_bulk/error_number_nil.csv',
      ext_error: './spec/files/ext_error.png',
      error_number_not_found: './spec/files/sms_bulk/error_number_not_found.csv',
      error_number_not_balance: './spec/files/sms_bulk/error_number_not_balance.csv'
    }
  end
end
