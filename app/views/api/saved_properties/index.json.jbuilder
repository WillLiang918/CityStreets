json.array! @saved_properties do |property|
  json.id property.id
  json.description property.description
  json.address property.address.get_address
  json.fullAddress property.address.get_full_address
  json.latlng property.address.get_lnglat
  json.price property.get_price
  json.photos property.get_photos

  json.details do
    json.bedrooms property.get_bedrooms
    json.bathrooms property.get_bathrooms
    json.square_ft property.get_square_ft
  end

end

# json.array! @properties do |property|
#   json.id property.id
#   json.extract! property, :owner_user_id, :bedrooms, :bathrooms, :square_ft
#   json.price property.get_price
#   json.address property.get_address
# end
  # json.address do
  #   json.property_id property.address.property_id
  #   json.street property.address.street
  #   json.unit property.address.unit
  #   json.city property.address.city
  #   json.state property.address.state
  #   json.zip property.address.zip
  #   json.latitude property.address.latitude
  #   json.longitude property.address.longitude
  # end
