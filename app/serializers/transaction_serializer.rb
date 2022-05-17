class TransactionSerializer < ActiveModel::Serializer
  attributes :name, :token, :status, :observation, :queue
  attribute :resource_token

  def resource_token
    object.adjustable&.id_unique
  end
end
