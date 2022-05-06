require 'csv'

class Bulk::ImportContactsWorker < BaseWorker
  sidekiq_options retry: true, queue: :default

  # el metodo run viene desde el BaseWorker siempre recibe el id del user y el id de la transaccion
  # se le envia el bloque que necesitan ejecutar este se encarga de iniciar el proceso completarlo o cancelarlo
  # con ese metodo run podras usar los objetos user, account, transaction
  def perform(user_id, transaction_id)
    run(user_id, transaction_id){ create_send_bulk }
  end

  private
  def create_send_bulk
    create_sms if transaction.sms?
  end

  def create_sms
    verification = ::Sms::SendBulk::Verification.new(user: user, account: account, path: path).call
    raise ArgumentError, verification[:message] unless verification[:success]

    Sms::SendBulk::Create.new(user: user, account: account, csv: verification[:csv], transaction: transaction).call
  end

  def path
    @path ||= file_path
  end

  def file_path
    filename = file.filename
    tmp = Tempfile.new([filename.base, filename.extension_with_delimiter], binmode: true)
    tmp.write(file.download)
    tmp.rewind
    tmp.path
  end

  def file
    @file ||= transaction.file
  end
end
