class RemoveAnswersFromQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :answer_one
    remove_column :questions, :answer_two
    remove_column :questions, :answer_three
    remove_column :questions, :answer_four
  end
end
