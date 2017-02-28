class Admin::QuestionsController < Admin::BaseController
  def index
    @question = Question.all
  end

  def new
    @question = Question.new
  end

end
