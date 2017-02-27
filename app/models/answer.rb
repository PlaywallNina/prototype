class Answer < ApplicationRecord
  has_many :answered_questions
  belongs_to :question
end
