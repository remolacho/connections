# == Schema Information
#
# Table name: send_bulk_transactions
#
#  id           :bigint           not null, primary key
#  id_account   :integer          not null
#  id_auth_user :integer          not null
#  name         :string(255)
#  observation  :string(255)
#  send_type    :string(255)
#  status       :integer          default("unstarted")
#  token        :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_send_bulk_transactions_on_id_account    (id_account)
#  index_send_bulk_transactions_on_id_auth_user  (id_auth_user)
#  index_send_bulk_transactions_on_token         (token) UNIQUE
#
FactoryBot.define do
  factory :send_bulk_transaction do
    
  end
end
