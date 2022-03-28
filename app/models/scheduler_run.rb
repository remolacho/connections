# == Schema Information
#
# Table name: scheduler_run
#
#  id          :integer          not null, primary key
#  run_output  :text(4294967295)
#  run_result  :text(4294967295)
#  start_time  :datetime
#  status      :string(512)
#  stop_time   :datetime
#  traceback   :text(4294967295)
#  worker_name :string(512)
#  task_id     :integer
#
# Indexes
#
#  task_id__idx  (task_id)
#
# Foreign Keys
#
#  scheduler_run_ibfk_1  (task_id => scheduler_task.id) ON DELETE => cascade
#
class SchedulerRun < ApplicationRecord
	self.table_name = "scheduler_run"
end
