class Api::SavedPropertiesController < ApplicationController

  def index
    @user_id = params[:user][:id]
    if @user_id.present?
      @user = User.where(id: @user_id)
      render json: @user.saved_properties
    end
  end

  def show
  end

  def create
    @saved_property = SavedProperty.create!(saved_property_params)
    render json: @saved_property
  end

  def destroy
    debugger
    @saved_property = SavedProperty.find(params[:id])
    @saved_property.destroy
    render json: @saved_property
  end


  private
    def saved_property_params
      params.require(:saved_property).permit(
        :user,
        :user_id,
        :property_id
      )
    end
end
