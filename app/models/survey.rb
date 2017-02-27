class Survey < ApplicationRecord
  has_many :questions
  has_many :answers, through: :questions
  belongs_to :admin
end
