class Photo < ActiveRecord::Base

  has_attached_file :image,
    default_url: "default.jpg",
    :styles => {
      :small => "150x100#",
      :normal => "600x400#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :property, class_name: "Property", foreign_key: :property_id

  def set_image (image)
    self.image = image
  end

end
