json.array! @properties do |property|
  json.id property.id
  json.extract! property, :owner_user_id, :price, :bedrooms, :bathrooms, :square_ft
  json.address property.get_address
end

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
