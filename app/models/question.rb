class Question < ApplicationRecord
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers

  validates :text, presence: true

  # def self.to_csv
  #   CSV.generate do |csv|
  #     csv << column_names
  #     all.each do |question|
  #       csv << question.attributes.values_at(*column_names)
  #     end
  #   end
  # end
end
