class QuestionsController < ApplicationController
  def index
    @questions = Question.all.limit(5)
    render json: @questions, include: 'answers'
  end
end
