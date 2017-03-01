class GivenAnswersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    given_answer = GivenAnswer.new(answer_id: params[:answer_id])

    if !(session[:playwallid])
      session[:playwallid] = SecureRandom.base58(128)
    end

    given_answer.session_id = session[:playwallid]

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
end
