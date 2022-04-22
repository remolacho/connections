# frozen_string_literal: true

require 'rails_helper'

describe Sms::Delivery::Platform, type: :service do
  include_context('delivery_stuff')

  context 'crear o buscar delivery de tipo plataforma para sms' do
    it 'Crea un nuevo delivery para un usuario que no tiene ninguno' do
      service = Sms::Delivery::Platform.new(user: current_user, product: current_product)

      result = service.call
      expect(result[:success]).to eq(true)
      expect(result[:is_new]).to eq(true)
      expect(result[:delivery].present?).to eq(true)
      expect(result[:delivery].delivery_type).to eq(Delivery::PLATFORM)
    end

    it 'Crea un nuevo delivery para un usuario que tiene delivery vencido' do
      delivery_platform_sms_due_date

      service = Sms::Delivery::Platform.new(user: current_user, product: current_product)

      result = service.call
      expect(result[:success]).to eq(true)
      expect(result[:is_new]).to eq(true)
      expect(result[:delivery].present?).to eq(true)
      expect(result[:delivery].delivery_type).to eq(Delivery::PLATFORM)
    end

    it 'Retorna un delivery existente para el usuario' do
      delivery_platform_sms

      service = Sms::Delivery::Platform.new(user: current_user, product: current_product)

      result = service.call
      expect(result[:success]).to eq(true)
      expect(result[:is_new]).to eq(false)
      expect(result[:delivery].present?).to eq(true)
    end
  end

end
