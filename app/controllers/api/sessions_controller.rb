class Api::SessionsController < ApplicationController

  def show
    if current_user
      # @user = User.includes(:saved_properties).where(id: current_user.id).first
      @user = current_user
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if @user
      sign_in(@user)
      render :show
    else
      render json: { errors: "Invalid username or password combination"}
    end
  end

  def destroy
    sign_out
    render json: {}
  end

end
