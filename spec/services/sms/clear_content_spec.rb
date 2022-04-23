# frozen_string_literal: true

require 'rails_helper'

describe Sms::ClearContent, type: :service do
  include_context('multiplier_stuff')

  context 'Servicio que limpia los caracteres especiales de una cadena de texto' do
    it 'El contenido del mensaje esta vacio' do
      service = Sms::ClearContent.new(sms_content: '')
      expect{service.call}.to raise_error(ArgumentError)
    end

    it 'error al enviar mensaje' do
      sms_content = "ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž"
      service = Sms::ClearContent.new(sms_content: sms_content)
      expect{service.call}.to raise_error(ArgumentError)
    end

    it 'reemplaza las tildes' do
      sms_content = "Hola conectus a continuación"
      service = Sms::ClearContent.new(sms_content: sms_content).call
      expect(service[:success]).to eq true
      expect(service[:sms_content].present?).to eq true
      expect(service[:sms_content].match(/continuación/).nil?).to eq true
      expect(service[:sms_content].match(/continuacion/).nil?).to eq false
    end

    it 'reemplaza caracteres especiales' do
      sms_content = "Hola conectus a continuación pasamos a DÃ©sarrollar una aplicación"
      service = Sms::ClearContent.new(sms_content: sms_content).call
      expect(service[:success]).to eq true
      expect(service[:sms_content].present?).to eq true
      expect(service[:sms_content].match(/DÃ©sarrollar/).nil?).to eq true
      expect(service[:sms_content].match(/Desarrollar/).nil?).to eq false
    end
  end

end

