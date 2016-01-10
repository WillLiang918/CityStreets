json.extract! @user,
  :id,
  :username
  json.saved_properties do
    json.array! @user.saved_properties do |saved_property|
      json.saved_property_id saved_property.id
      json.id saved_property.property_id
      json.address saved_property.property.address.get_address
      json.fullAddress saved_property.property.address.get_full_address
      json.latlng saved_property.property.address.get_lnglat
      json.price saved_property.property.get_price
      json.photos saved_property.property.get_photos

      json.details do
        json.bedrooms saved_property.property.get_bedrooms
        json.bathrooms saved_property.property.get_bathrooms
        json.square_ft saved_property.property.get_square_ft
      end
    end
  end
