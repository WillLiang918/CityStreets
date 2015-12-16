json.array! @properties do |property|
  json.id property.id
  json.description property.description
  json.address property.address.get_address
  json.fullAddress property.address.get_full_address
  json.latlng property.address.get_lnglat
  json.price property.get_price
  json.photos property.get_photos.first

  json.details do
    json.bedrooms property.get_bedrooms
    json.bathrooms property.get_bathrooms
    json.square_ft property.get_square_ft
  end

  json.propertiesCount @properties_count
end
