json.extract! @user,
  :id,
  :username
  json.saved_properties @user.saved_properties

# json.saved_properties do
#   json.array! @user.saved_properties, :id, :property_id,
#   # @user.saved_properties.each do |saved_property|
#   #   json.set! saved_property.property_id
#   # end
# end

# json.saved_properties do
#   # json.array! @user.saved_properties.each do |saved_property|
#   #   json.property saved_property.property
#   json.array! @user.saved_properties do |property|
#     json.saved_property_id property.id
#     json.id property.property.id
#     json.address property.property.address.get_address
#     json.fullAddress property.property.address.get_full_address
#     json.latlng property.property.address.get_lnglat
#     json.price property.property.get_price
#     json.photos property.property.get_photos
#
#     json.details do
#       json.bedrooms property.property.get_bedrooms
#       json.bathrooms property.property.get_bathrooms
#       json.square_ft property.property.get_square_ft
#     end
#
#   end
#
# end
