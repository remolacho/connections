# == Schema Information
#
# Table name: scheduler_task
#
#  id                   :integer          not null, primary key
#  application_name     :string(512)
#  args                 :text(4294967295)
#  assigned_worker_name :string(512)
#  cronline             :string(512)
#  enabled              :string(1)
#  function_name        :string(512)
#  group_name           :string(512)
#  last_run_time        :datetime
#  next_run_time        :datetime
#  period               :integer
#  prevent_drift        :string(1)
#  repeats              :integer
#  retry_failed         :integer
#  start_time           :datetime
#  status               :string(512)
#  stop_time            :datetime
#  sync_output          :integer
#  task_name            :string(512)
#  timeout              :integer
#  times_failed         :integer
#  times_run            :integer
#  uuid                 :string(255)
#  vars                 :text(4294967295)
#
# Indexes
#
#  task_name_index  (task_name)
#  uuid             (uuid) UNIQUE
#
class SchedulerTask < ApplicationRecord
	self.table_name = "scheduler_task"
end
