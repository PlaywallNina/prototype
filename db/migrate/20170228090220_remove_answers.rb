class RemoveAnswers < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key "answers", "questions"
    drop_table :answers
  end
end
