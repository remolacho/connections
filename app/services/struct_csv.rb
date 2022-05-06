class StructCsv
  attr_accessor :header, :rows, :col_sep, :header_size

  def initialize(header:, col_sep:, rows: [])
    @header = header
    @rows   = rows
    @col_sep = col_sep
    @header_size = header&.size || 0
  end
end