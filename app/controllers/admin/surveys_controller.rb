class Admin::SurveysController < Admin::BaseController
    def index
      @surveys = Survey.all
    end

    def show
      @survey = Survey.find(params[:id])
      @questions = @survey.questions
    end

    def new
      @survey = Survey.new
      @questions = Question.all
    end

    def create
      @survey = Survey.new(survey_params)
      @survey.questions.push(Question.find(params[:survey][:questions][:question1]))
      @survey.questions.push(Question.find(params[:survey][:questions][:question2]))
      @survey.questions.push(Question.find(params[:survey][:questions][:question3]))
      @survey.questions.push(Question.find(params[:survey][:questions][:question4]))
      debugger

      if @survey.save
        redirect_to admin_surveys_path
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
      def survey_params
        params.require(:survey).permit(:title)
      end
  end
