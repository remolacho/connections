class SendBulkTransaction
  module Workerable
    extend ActiveSupport::Concern

    def factory_worker(queue_name)
      send("run_#{queue_name}")
    end

    private

    def run_send_contacts
      ::Bulk::ImportContactsWorker.perform_async(id_auth_user, id)
    end
  end
end
