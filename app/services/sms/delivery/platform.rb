module Sms
  module Delivery
    class Platform < Delivery::Base

      def initialize(user:, product:)
        super(user: user, product: product)
      end

      def call
        resource = find_or_create

        { success: true, is_new: resource.is_new, delivery: resource.object }
      rescue StandardError => e
        { success: false, message: "find or create delivery error: #{e.to_s}" }
      end

      private

      def find_or_create
        deliveries = scope_delivery.by_name_platform_sms(user)
        return resource.new(false, deliveries.first) if deliveries.present?

        delivery = create_delivery(name: ::Delivery.assign_name_platform_sms(user),
                                   delivery_type: ::Delivery::PLATFORM)

        resource.new(true, delivery)
      end
    end
  end
end
