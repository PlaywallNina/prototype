class Answer < ApplicationRecord
  belongs_to :question
  has_many :given_answers, dependent: :destroy
  validates :order, numericality: { only_integer: true, greater_than: 0, less_than: 5 }
  validates :picture, presence: true
  validates :title, presence: true
end
