class Admin::SurveysController < Admin::BaseController
    def index
      @surveys = Survey.all
    end

    def show
      @survey = Survey.find(params[:id])
      @questions = @survey.questions
      @last_weeks_answers = GivenAnswer.where(created_at: 2.weeks.ago..DateTime.now)

      respond_to do |format|
        format.html
        format.csv do
          headers['Content-Disposition'] = "attachment; filename=\"question-list.csv\""
          headers['Content-Type'] ||= 'text/csv'
        end
      end
    end

    def new
      @survey = Survey.new
      @questions = Question.all
    end

    def create
      @survey = Survey.new(survey_params)
      addQuestions

      if @survey.save
        redirect_to admin_surveys_path
      else
        render :new
      end
    end

    def edit
      @survey = Survey.find(params[:id])
      @questions = Question.all
      @current_first_question = @survey.questions[0].id
      @current_second_question = @survey.questions[1].id
      @current_third_question = @survey.questions[2].id
      @current_fourth_question = @survey.questions[3].id
      @current_fifth_question = @survey.questions[4].id
    end

    def update
      @survey = Survey.find(params[:id])
      @survey.questions = []
      addQuestions

      if @survey.update_attributes(survey_params)
        redirect_to admin_surveys_path
      else
        render 'edit'
      end
    end

    def destroy
      @survey = Survey.find(params[:id])
      @survey.destroy

      redirect_to admin_root_path
    end

    private
      def survey_params
        params.require(:survey).permit(:title)
      end

      def addQuestions
        @survey.questions.push(Question.find(params[:survey][:questions][:question1]))
        @survey.questions.push(Question.find(params[:survey][:questions][:question2]))
        @survey.questions.push(Question.find(params[:survey][:questions][:question3]))
        @survey.questions.push(Question.find(params[:survey][:questions][:question4]))
        @survey.questions.push(Question.find(params[:survey][:questions][:question5]))
      end
  end
