class RemoveSurveys < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key "questions", "surveys"
    remove_column :questions, :survey_id
    drop_table :surveys
  end
end
