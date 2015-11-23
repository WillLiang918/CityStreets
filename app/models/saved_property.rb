class SavedProperty < ActiveRecord::Base

  validates :user_id, :property_id, presence: true;

  belongs_to :owner, class_name: "User", foreign_key: :user_id
  belongs_to :property, class_name: "Property", foreign_key: :property_id

end
