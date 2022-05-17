require 'csv'

module Sms
  module SendBulk
    class Verification
      attr_accessor :path, :user, :account

      def initialize(user:, account:, path:)
        @path = path
        @user = user
        @account = account
      end

      def call
        read
      end

      private

      def read
        valid_header
        valid_rows

        { success: true, message: '', csv: csv }
      rescue StandardError => e
        { success: false, message: e.to_s }
      end

      def valid_header
        if csv.header.size > 10
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.header.too_long')
        end

        if csv.header[0].downcase != 'telefono'.freeze
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.header.phone')
        end
      end

      def valid_rows
        index_row = 1

        CSV.foreach(path, col_sep: '||', encoding: "ISO8859-1:utf-8") do |row|
          next index_row += 1 if index_row == 1
          next if row.empty?

          text = clear_row(row[0], index_row)
          new_row = text.split(csv.col_sep)&.map(&:strip)
          count_row_elements(new_row, index_row)
          number_valid.call(number: new_row[0], i_row: index_row)
          csv.rows << new_row
          index_row += 1
        end
      end

      def number_valid
        @number_valid ||= NumberValid.new(user: user, account: account)
      end

      # valida que la fila no sea mayor a la cabecera
      def count_row_elements(row, index)
        if row.size > csv.header_size
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.row.size',
                                      {num_row: index})
        end
      end

      def csv
        @csv ||= struct_csv
      end

      def struct_csv
        table = []
        options = {col_sep: "||", encoding: "ISO8859-1:utf-8"}

        CSV.open(path, options) do |rows|
          iterator = rows.each
          table = iterator.first
        end

        raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.rows.empty') if table.empty?

        ::StructCsv.new(build_header(table[0]))
      end

      def build_header(header)
        col_sep = separator(header)
        text    =  clear_header(header)
        header  = text.split(col_sep)&.map(&:strip)
        { col_sep: col_sep, header: header}
      end

      def separator(header)
        if header.match(/,/).nil? && header.match(/;/).nil?
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.separator')
        end

        if header.match(/,/).present? && header.match(/;/).present?
          raise ArgumentError, I18n.t('services.sms.contacts_bulk.verification.error.separator')
        end

        header.match(/,/).present? ? ',' : ';'
      end

      def clear_header(header)
          hash = clear_text(header, 'header')
          hash[:sms_content]
      end

      def clear_row(row, index_row)
        r = clear_text(row, "row: #{index_row}")
        r[:sms_content]
      end

      def clear_text(text, resource)
        Sms::ClearContent.new(sms_content: text, resource: resource, skip_nil: true).call
      end
    end
  end
end