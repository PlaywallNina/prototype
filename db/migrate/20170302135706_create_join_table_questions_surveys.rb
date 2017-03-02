class CreateJoinTableQuestionsSurveys < ActiveRecord::Migration[5.1]
  def change
    create_join_table :questions, :surveys do |t|
      # t.index [:question_id, :survey_id]
      # t.index [:survey_id, :question_id]
    end
  end
end
