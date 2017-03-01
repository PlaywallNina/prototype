class Admin::AnswersController < Admin::BaseController
  def show
    @answer = Answer.find(params[:id])
  end

  def new
    @answer = Answer.new
  end

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      redirect_to admin_questions_path
    else
      render :new
    end
  end

  private
    def answer_params
      params.require(:answer).permit(:order, :picture, :title)
    end
end
