class Photo < ActiveRecord::Base

  has_attached_file :image, default_url: "default.jpg", :styles => { :normal => "150x150#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :property, class_name: "Property", foreign_key: :property_id

end
