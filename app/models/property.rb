class Property < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:address]

  validates :owner_user_id, :price, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :owner_user_id
  has_one :address, class_name: "Address", foreign_key: :property_id
  has_many :photos, class_name: "Photo", foreign_key: :property_id
  has_many :saved_properties, class_name: "SavedProperty", foreign_key: :property_id

  def get_price
    "$#{self.price}".to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
  end

  def get_details
    details = {};
    details[:bedrooms] = "#{self.bedrooms} beds" unless self.bedrooms.nil?
    details[:bathrooms] = "#{self.bathrooms} bath" unless self.bathrooms.nil?
    details[:square_ft] = "#{self.square_ft} ft²" unless self.square_ft.nil?
    details
  end

  def get_bedrooms
    "#{self.bedrooms} beds" unless self.bedrooms.nil?
  end

  def get_bathrooms
    "#{self.bathrooms} baths" unless self.bathrooms.nil?
  end

  def get_square_ft
    "#{self.square_ft} ft²" unless self.square_ft.nil?
  end

  def get_photos
    self.photos.map { |photo| photo.image.url(:normal) }
  end

end
