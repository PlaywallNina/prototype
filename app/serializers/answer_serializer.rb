class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :order, :picture, :title

  belongs_to :question
end
