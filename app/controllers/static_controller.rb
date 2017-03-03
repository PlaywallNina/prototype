class StaticController < ApplicationController
  after_action :allow_iframe

  def home
  end

  private
    def allow_iframe
      response.headers.except! 'X-Frame-Options'
    end
end
