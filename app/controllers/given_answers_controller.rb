class GivenAnswersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    given_answer = GivenAnswer.new(given_answer_params)

    if given_answer.save
      render status: 201, json: {
        message: "Answer successfully saved",
        given_answer: given_answer
      }.to_json
    else
      render status: 422, json: {
        errors: given_answer.errors
      }.to_json
    end
  end

  private

  def given_answer_params
    params.require(:given_answer).permit(:session_id, :answer_id)
  end
end
