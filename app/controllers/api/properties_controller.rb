class Api::PropertiesController < ApplicationController

  def index
    @properties = Property.all
  end

  def create
    property = Property.create!(property_params)
    render json: property
  end

  def show
    property = Property.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private
    def property_params
      params.require(:property).permit(
        :owner_user_id,
        :price,
        :bedrooms,
        :bathrooms,
        :square_ft
      )
    end
end
