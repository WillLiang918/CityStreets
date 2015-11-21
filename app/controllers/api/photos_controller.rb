class Api::PhotosController < ApplicationController

  def index
    if (params[:id] && params[:id].length == 1)
      @photo = Photo.where(property_id: params[:id])
    else
      @photos = Photo.order(created_at: :desc).all
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
