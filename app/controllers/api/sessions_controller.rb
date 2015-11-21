class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      sign_in(@user)
      render json: @user
    else
      render json: { errors: "Invalid username or password combination"}
    end
  end
  
end
