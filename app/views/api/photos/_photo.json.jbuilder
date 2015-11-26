json.extract! photo, :id, :title, :property_id
json.image_url asset_path(photo.image.url(:normal))
