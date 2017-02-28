class AddAnswersToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answer_one, :string
    add_column :questions, :answer_two, :string
    add_column :questions, :answer_three, :string
    add_column :questions, :answer_four, :string
  end
end
