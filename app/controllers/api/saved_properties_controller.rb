class Api::SavedPropertiesController < ApplicationController

  def index
    @user = params[:user]
    render json: @user.saved_properties
  end

  def show
  end

  def create
    @saved_property = SavedProperty.create!(saved_property_params)
    render json: @saved_property
  end

  private
    def saved_property_params
      params.require(:saved_property).permit(
        :user_id,
        :property_id
      )
    end
end
