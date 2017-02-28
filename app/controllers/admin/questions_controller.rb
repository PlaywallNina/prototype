class Admin::QuestionsController < Admin::BaseController
  def index
    @questions = Question.all
  end

  def new
    @question = Question.new

    for i in 1..4
      @question.answer order: i
    end
  end

  def create
    @question = Question.new(question_params)
    for i in 1..4
      @question.answers[i] = Answer.new(answer_params)
    end


    if @question.save
      redirect_to admin_questions_path
    else
      render :new
    end
  end

  private
    def question_params
      params.require(:question).permit(:text)
    end

    def answer_params
      params.require(:answer).permit(:order, :picture, :title)
    end
end
