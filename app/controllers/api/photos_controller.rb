class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.order(created_at: :desc).all
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
      params.require(:Photo).permit(:title, :image)
    end
end
