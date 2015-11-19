class Photo < ActiveRecord::Base

  has_attached_file :image, default_url: "default.jpg"
  belongs_to :properties, class_name: "Property", foreign_key: :property_id
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
