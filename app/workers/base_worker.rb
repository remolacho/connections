class BaseWorker
  include Sidekiq::Worker

  attr_accessor :transaction, :user, :account

  def run(user_id, transaction_id, &block)
    in_progress_transaction(user_id, transaction_id)
    yield if block.present?
    completed_transaction
  rescue StandardError => e
    canceled_transaction(e)
  end

  def in_progress_transaction(user_id, transaction_id)
    @user = AuthUser.find user_id
    @account = user.account
    @transaction = account.send_bulk_transactions.find transaction_id
    @transaction.in_progress!
  end

  def completed_transaction
    transaction.completed!
  end

  def canceled_transaction(error)
    transaction.observation = error
    transaction.canceled!
  end
end
