class Property < ActiveRecord::Base

  validates :owner_user_id, :price, presence: true

  belongs_to :owners, class_name: "User", foreign_key: :owner_user_id
  has_one :address, class_name: "Address", foreign_key: :property_id
  has_many :photos, class_name: "Photo", foreign_key: :property_id

  def get_address
    "#{self.address.street} #{self.address.unit}"
  end

end
