class Api::PropertiesController < ApplicationController

  def index
    minPrice = params[:minPrice]
    maxPrice = params[:maxPrice]
    bedrooms = params[:bedrooms]
    bathrooms = params[:bathrooms]
    neighborhood = params[:neighborhood]
    location = params[:location]

    if neighborhood.present?
      @properties = Property.joins(:address)
      @properties = @properties.where("neighborhood LIKE ?", neighborhood)
    else
      @properties = Property.all
    end

    if location.present?
      property_ids = []
      @search_results = PgSearch.multisearch(location).includes(:searchable)
      @search_results.map do |result|
        result = result.searchable
        if result.class == Address
          property_ids << result.property_id
        end
      end
      @properties = @properties.where(id: property_ids)
    end

    if minPrice.present? && minPrice != "Any"
      @properties = @properties.where("price >= ?", minPrice.gsub(/\D/,'').to_i )
    end
    if maxPrice.present? && maxPrice != "Any"
      @properties = @properties.where("price <= ?", maxPrice.gsub(/\D/,'').to_i )
    end
    if bedrooms.present? && bedrooms != "Any Beds"
      @properties = @properties.where("bedrooms >= ?", bedrooms.gsub(/\D/,'').to_i )
    end
    if bathrooms.present? && bathrooms != "Any Baths"
      @properties = @properties.where("bathrooms >= ?", bathrooms.gsub(/[^\d\.]/, '').to_f )
    end
    @properties_count = @properties.count
    @properties = @properties.page(params[:page]).per(10)
  end

  def create
    property = Property.create!(property_params)
    render json: property
  end

  def show
    @property = Property.find(params[:id])
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
        :square_ft,
        :page
      )
    end
end
