module Sms
  module Delivery
    class Base < BaseService
      attr_accessor :user, :account, :product

      def initialize(user:, product:)
        @user = user
        @product = product
        @account = user.account
      end

      private

      def create_delivery(name:, delivery_type:)
        user.deliveries.create!(name: name,
                                delivery_type: delivery_type,
                                id_product: product.id,
                                id_account: account.id,
                                id_unique: ::Delivery.generate_unique_id)
      end

      def scope_delivery
        user.deliveries
            .between_begin_at_end_created
            .where(id_account: account.id)
            .where(id_product: product.id)
      end

      def resource
        Struct.new(:is_new, :object)
      end
    end
  end
end

