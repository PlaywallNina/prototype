class CreateGivenAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :given_answers do |t|
      t.string :session_id
      t.references :answer, foreign_key: true

      t.timestamps
    end
  end
end
