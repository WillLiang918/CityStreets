class Address < ActiveRecord::Base

  belongs_to :property, class_name: "Property", foreign_key: :property_id
  geocoded_by :get_full_address

  validates :property_id, :street, :unit, :city, :state, :zip, presence: true
  validates :property, presence: true

  after_validation :geocode


  def get_address
    "#{self.street} #{self.unit}"
  end

  def get_full_address
    # "#{get_address}, #{self.city}, #{self.state}, #{self.zip} "
    "#{self.street}, #{self.city}, #{self.state}"
  end

  def get_lnglat
    { lat: self.latitude, lng: self.longitude }
  end

end
