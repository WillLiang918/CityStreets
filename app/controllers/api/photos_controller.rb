class Api::PhotosController < ApplicationController

  def index (filter = nil)
    if !filter
      @photos = Photo.order(created_at: :desc).all
    else
      
    end
  end

  def create
    @photo = Photo.create!(photo_params)
    render :show
  end

  def show
    @photo = Photo.find(params[:id])
  end

  private

    def photo_params
      params.require(:photo).permit(:title, :property_id, :image)
    end
end
