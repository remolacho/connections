# == Schema Information
#
# Table name: scheduler_worker
#
#  id              :integer          not null, primary key
#  first_heartbeat :datetime
#  group_names     :text(4294967295)
#  is_ticker       :string(1)
#  last_heartbeat  :datetime
#  status          :string(512)
#  worker_name     :string(255)
#  worker_stats    :text(4294967295)
#
# Indexes
#
#  worker_name  (worker_name) UNIQUE
#
class SchedulerWorker < ApplicationRecord
	self.table_name = "scheduler_worker"
end
