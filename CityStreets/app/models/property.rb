class Property < ActiveRecord::Base

  validates :owner_user_id, :price, presence: true

  belongs_to :owners, class_name: "User", foreign_key: :owner_user_id
  has_one :address, class_name: "Address", foreign_key: :property_id

end
