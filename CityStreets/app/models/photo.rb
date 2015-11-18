class Photo < ActiveRecord::Base

  validates :title, presence: true

  belongs_to :properties, class_name: "Property", foreign_key: :property_id

end
