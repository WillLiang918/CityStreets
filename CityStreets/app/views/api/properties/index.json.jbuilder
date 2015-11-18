json.array! @properties do |property|
  json.id property.id
  json.owner_user_id property.owner_user_id
  json.price property.price
  json.bedrooms property.bedrooms
  json.bathrooms property.bathrooms
  json.square_ft property.square_ft

  json.address do

    json.property_id property.address.property_id
    json.street property.address.street
    json.unit property.address.unit
    json.city property.address.city
    json.state property.address.state
    json.zip property.address.zip
    json.latitude property.address.latitude
    json.longitude property.address.longitude
  end
end
