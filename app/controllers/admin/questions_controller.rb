class Admin::QuestionsController < Admin::BaseController
  def index
    @questions = Question.all.order(created_at: :desc)
  end

  def new
    @question = Question.new
    4.times do
      @question.answers.build
    end
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      (0..3).each do |n|
        currentparams = params.dig(:question, :answers_attributes, "#{n}")
        @question.answers.create(picture: currentparams[:picture], title: currentparams[:title], order: currentparams[:order])
      end
      redirect_to admin_questions_path
    else
      render :new
    end
  end

  private
    def question_params
      params.require(:question).permit(:text)
    end

    def answer_params(n)
      params.require(:question).permit(params.dig(:question, :answers_attributes, "#{n}"))
    end
end
