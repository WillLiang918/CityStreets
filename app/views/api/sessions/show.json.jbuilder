json.extract! @user,
  :id,
  :username

# json.array! @user.saved_properties, :property_id

json.saved_properties do
  json.array! @user.saved_properties, :id, :property_id
  # @user.saved_properties.each do |saved_property|
  #   json.set! saved_property.property_id
  # end
end
