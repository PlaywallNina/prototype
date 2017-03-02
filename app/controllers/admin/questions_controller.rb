class Admin::QuestionsController < Admin::BaseController
  def index
    @questions = Question.all.order(created_at: :desc)
    @last_weeks_answers = GivenAnswer.where(created_at: 2.weeks.ago..DateTime.now)

    respond_to do |format|
      format.html
      format.csv do
        headers['Content-Disposition'] = "attachment; filename=\"question-list.csv\""
        headers['Content-Type'] ||= 'text/csv'
      end
    end
  end

  def show
    @question = Question.find(params[:id])
    @answers = @question.answers
    @givenanswers = Array.new
    @amount = 0
    @answers.each do |answ|
      if GivenAnswer.where(answer_id: answ.id) != []
        @amount += (GivenAnswer.where(answer_id: answ.id)).count
      end
    end
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

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])

    if @question.update_attributes(question_params)
      (0..3).each do |n|
        currentparams = params.dig(:question, :answers_attributes, "#{n}")
        @question.answers[n].update_attributes(picture: currentparams[:picture], title: currentparams[:title], order: currentparams[:order])
      end
      redirect_to admin_questions_path
    else
      render 'edit'
    end
  end

  def destroy
    @question = Question.find(params[:id])

    @question.destroy

    redirect_to admin_questions_path
  end

  private
    def question_params
      params.require(:question).permit(:text)
    end

    def answer_params(n)
      params.require(:question).permit(params.dig(:question, :answers_attributes, "#{n}"))
    end
end
