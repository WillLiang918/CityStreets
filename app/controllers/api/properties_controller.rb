class Api::PropertiesController < ApplicationController

  def index
    minPrice = params[:minPrice]
    maxPrice = params[:maxPrice]
    bedrooms = params[:bedrooms]
    bathrooms = params[:bathrooms]
    neighborhood = params[:neighborhood]

    @properties = Property.joins(:address)
    if minPrice.present? && minPrice != "Any"
      @properties = @properties.where("price >= ?", minPrice.gsub(/\D/,'').to_i )
    end

    if maxPrice.present? && maxPrice != "Any"
      @properties = @properties.where("price <= ?", maxPrice.gsub(/\D/,'').to_i )
    end
    if bedrooms.present? && bedrooms != "Any"
      @properties = @properties.where("bedrooms >= ?", bedrooms.gsub(/\D/,'').to_i )
    end
    if bathrooms.present? && bathrooms != "Any"
      @properties = @properties.where("bathrooms >= ?", bathrooms.gsub(/[^\d\.]/, '').to_f )
    end
    if neighborhood.present?
      @properties = @properties.where("neighborhood LIKE ?", neighborhood)
    end
    @properties
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
