class SavedProperty < ActiveRecord::Base

  validates :user_id, :property_id, presence: true;
  validates_uniqueness_of :user_id, :scope => [:property_id]

  belongs_to :owner, class_name: "User", foreign_key: :user_id
  belongs_to :property, class_name: "Property", foreign_key: :property_id

  def get_price
    "$#{self.property.price}"
  end

  def get_details
    details = {};
    details[:bedrooms] = "#{self.property.bedrooms} beds" unless self.bedrooms.nil?
    details[:bathrooms] = "#{self.property.bathrooms} bath" unless self.bathrooms.nil?
    details[:square_ft] = "#{self.property.square_ft} ft²" unless self.square_ft.nil?
    details
  end

  def get_bedrooms
    "#{self.property.bedrooms} beds" unless self.property.bedrooms.nil?
  end

  def get_bathrooms
    "#{self.property.bathrooms} baths" unless self.property.bathrooms.nil?
  end

  def get_square_ft
    "#{self.property.square_ft} ft²" unless self.property.square_ft.nil?
  end

  def get_photos
    self.property.photos.map { |photo| photo.image.url }
  end

end
