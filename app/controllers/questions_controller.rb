class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order(created_at: :desc).limit(5)
    render json: @questions, include: 'answers'
  end
end
