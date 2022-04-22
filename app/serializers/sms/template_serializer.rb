class Sms::TemplateSerializer < ActiveModel::Serializer
  attributes :id, :name, :text

  def text
    object.template_text
  end
end
