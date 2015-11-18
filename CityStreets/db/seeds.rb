# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Address.delete_all
Property.delete_all

user1 = User.create!(
  username: "admin",
  password: "password"
)

address1 = Address.create!(
  property_id: 1,
  street: "959 First Avenue",
  unit: "#17B",
  city: "New York City",
  state: "New York",
  zip: 10022
)

property1 = Property.create!(
  owner_user_id: 1,
  price: 3000
)

address2 = Address.create!(
  property_id: 2,
  street: "5 Roebling Street",
  unit: "#PHB",
  city: "New York City",
  state: "New York",
  zip: 11211
)

property2 = Property.create!(
  owner_user_id: 1,
  price: 6000
)

# address3 = Address.create!(
#   property_id: 3,
#   street: "no streets",
#   unit: "unit 1 billion",
#   city: "NYZ",
#   state: "NEW YORK",
#   zip: 11111
# )
#
# property3 = Property.create!(
#   owner_user_id: 1,
#   price: 1000
# )