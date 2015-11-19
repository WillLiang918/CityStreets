class Address < ActiveRecord::Base

  validates :property_id, :street, :unit, :city, :state, :zip, presence: true
  belongs_to :property, class_name: "Property", foreign_key: :property_id

end
