class QuestionsController < ApplicationController
  def index
    @survey = Survey.find(rand(Survey.first.id..(Survey.first.id + Survey.all.length - 1)))
    
    if @survey != nil && (@survey.questions != nil || @survey.questions = 5)
      @questions = @survey.questions
    else
      @questions = Question.all.order(created_at: :desc).limit(5)
    end

    render json: @questions, include: 'answers'
  end
end
