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

BEDROOMS = [
  1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 4, 5
  ]

BATHROOMS = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1.5, 1.5, 1.5, 1.5,
  2, 2, 2,
  2.5, 3, 4
  ]

ADDRESSES =[
  '99 JOHN STREET',
  '96 READE STREET',
  '90 WILLIAM STREET',
  '9 WEST 20 STREET',
  '9 DUTCH STREET',
  '890 8 AVENUE',
  '890 8 AVENUE',
  '85 8 AVENUE',
  '835 BROADWAY',
  '812 RIVERSIDE DRIVE',
  '806 2 AVENUE',
  '801 RIVERSIDE DRIVE',
  '8 WARREN STREET',
  '8 UNION SQUARE SOUTH',
  '78 RIDGE STREET',
  '779 RIVERSIDE DRIVE',
  '77 HORATIO STREET',
  '77 8 AVENUE',
  '76 WEST 85 STREET',
  '76 MADISON AVENUE',
  '75 WALL STREET',
  '75 ALLEN STREET',
  '721 5 AVENUE',
  '72 EAST 3 STREET',
  '71 PARK AVENUE',
  '704 BROADWAY',
  '7 GRAMERCY PARK WEST',
  '7 EAST 17 STREET',
  '7 EAST 13 STREET',
  '69 WEST 106 STREET',
  '69 5 AVENUE',
  '67 WEST 107 STREET',
  '66 LEONARD STREET',
  '655 6 AVENUE',
  '649 2 AVENUE',
  '641 5 AVENUE',
  '630 1 AVENUE',
  '63 WEST 17 STREET',
  '63 COOPER SQUARE',
  '61 LEXINGTON AVENUE',
  '60 EAST 55 STREET',
  '5860 WEST 106 STREET',
  '571 ACADEMY STREET',
  '532 WEST 22 STREET',
  '53 WEST 11 STREET',
  '53 NORTH MOORE STREET',
  '525 WEST 22 STREET',
  '521 WEST 23 STREET',
  '52 EAST 4 STREET',
  '519 WEST 135 STREET',
  '504 WEST 136 STREET',
  '50 EAST 129 STREET',
  '50 BAYARD STREET',
  '47 WEST 131 STREET',
  '47 GREAT JONES STREET',
  '47 3 AVENUE',
  '465 GREENWICH STREET',
  '46 HENRY STREET',
  '455 CENTRAL PARK WEST',
  '45 SPRING STREET',
  '45 PARK AVENUE',
  '45 EAST 80 STREET',
  '45 EAST 66 STREET',
  '45 CHRISTOPHER STREET',
  '443 LAFAYETTE STREET',
  '442 HUDSON STREET',
  '44 EAST 67 STREET',
  '44 EAST 12 STREET',
  '43 WOOSTER STREET',
  '43 EAST 25 STREET',
  '43 CLARKSON STREET',
  '426 WEST BROADWAY',
  '425 BROOME STREET',
  '421 HUDSON STREET',
  '42 WOOSTER STREET',
  '42 EAST 20 STREET',
  '419 BLEECKER STREET',
  '416 EAST 117 STREET',
  '415 EAST 37 STREET',
  '414 EAST 120 STREET',
  '408 GREENWICH STREET',
  '400 EAST 51 STREET',
  '40 MERCER STREET',
  '40 BOND STREET',
  '399 1 AVENUE',
  '39 EAST 20 STREET',
  '385 3 AVENUE',
  '374 BROADWAY',
  '360 EAST 88 STREET',
  '36 GRAMERCY PARK EAST',
  '351 EAST 57 STREET',
  '351 EAST 51 STREET',
  '350 EAST 72 STREET',
  '350 EAST 30 STREET',
  '346 EAST 119 STREET',
  '345 EAST 80 STREET',
  '340 EAST 23 STREET',
  '333 EAST 102 STREET',
  '330 EAST 109 STREET',
  '327 CENTRAL PARK WEST',
  '321 5 AVENUE',
  '312 EAST 23 STREET',
  '312 EAST 22 STREET',
  '311 EAST 38 STREET',
  '311 AMSTERDAM AVENUE',
  '310 EAST 23 STREET',
  '31 WEST 11 STREET',
  '31 TIEMANN PLACE',
  '309 WEST 83 STREET',
  '306 WEST 97 STREET',
  '305 2 AVENUE',
  '301 WEST 57 STREET',
  '300 CATHEDRAL PARKWAY',
  '30 EAST 76 STREET',
  '296 WEST 10 STREET',
  '295 WEST 11 STREET',
  '285 LAFAYETTE STREET',
  '280 PARK AVENUE SOUTH',
  '270 BROADWAY',
  '265 1 AVENUE',
  '260 PARK AVENUE SOUTH',
  '255 WEST 148 STREET',
  '255 EAST 74 STREET',
  '252 WEST 17 STREET',
  '252 WEST 123 STREET',
  '252 7 AVENUE',
  '247 WEST 46 STREET',
  '247 WEST 115 STREET',
  '240 EAST 76 STREET',
  '24 WEST 131 STREET',
  '236 EAST 47 STREET',
  '235 EAST 40 STREET',
  '233 EAST 17 STREET',
  '230 WEST 78 STREET',
  '230 WEST 56 STREET',
  '225 WEST 83 STREET',
  '225 WEST 60 STREET',
  '225 RECTOR PLACE',
  '222 WEST 14 STREET',
  '222 RIVERSIDE DRIVE',
  '221 WEST 14 STREET',
  '220 WEST BROADWAY',
  '22 PERRY STREET',
  '217 WEST 19 STREET',
  '217 WEST 14 STREET',
  '215 WEST 95 STREET',
  '215 WEST 90 STREET',
  '215 WEST 88 STREET',
  '215 EAST 96 STREET',
  '2141 2 AVENUE',
  '2138 BROADWAY',
  '2120 BROADWAY',
  '211 ELIZABETH STREET',
  '21 SOUTH END AVENUE',
  '209 EAST 51 STREET',
  '207 EAST 57 STREET',
  '207 EAST 120 STREET',
  '206 EAST 124 STREET',
  '200 RECTOR PLACE',
  '200 EAST 69 STREET',
  '200 EAST 66 STREET',
  '200 EAST 65 STREET',
  '200 EAST 58 STREET',
  '200 EAST 28 STREET',
  '20 EXCHANGE PLACE',
  '196 STANTON STREET',
  '195 HUDSON STREET',
  '195 BOWERY',
  '186 WEST 80 STREET',
  '185 WEST END AVENUE',
  '180 WEST END AVENUE',
  '18 PINE STREET',
  '175 PAYSON AVENUE',
  '172 WEST 79 STREET',
  '171 WEST 107 STREET',
  '170 WEST END AVENUE',
  '170 EAST END AVENUE',
  '170 EAST 87 STREET',
  '170 EAST 78 STREET',
  '166 EAST 63 STREET',
  '165 WEST END AVENUE',
  '161 WEST 75 STREET',
  '1601 3 AVENUE',
  '1600 BROADWAY',
  '160 CENTRAL PARK SOUTH',
  '158 HESTER STREET',
  '157 LUDLOW STREET',
  '157 EAST 74 STREET',
  '155 HENRY STREET',
  '154 ATTORNEY STREET',
  '151 EAST 20 STREET',
  '15 WILLIAM STREET',
  '15 UNION SQUARE WEST',
  '15 EAST 15 STREET',
  '15 CLIFF STREET',
  '148 EAST 37 STREET',
  '145 MULBERRY STREET',
  '145 EAST 48 STREET',
  '143 LEXINGTON AVENUE',
  '136 BAXTER STREET',
  '130 BRADHURST AVENUE',
  '13 EAST 16 STREET',
  '13 EAST 11 STREET',
  '125 WEST 22 STREET',
  '125 WEST 21 STREET',
  '125 EAST 12 STREET',
  '125 CENTRAL PARK NORTH',
  '1239 MADISON AVENUE',
  '1235 PARK AVENUE',
  '123 WASHINGTON STREET',
  '1225 2 AVENUE',
  '122 ELIZABETH STREET',
  '120 EAST 86 STREET',
  '119 EAST 23 STREET',
  '118 WEST 112 STREET',
  '1178 2 AVENUE',
  '117 WEST 123 STREET',
  '117 EAST 57 STREET',
  '116 WEST 14 STREET',
  '1156 3 AVENUE',
  '114 GREENE STREET',
  '114 EAST 13 STREET',
  '110 MANHATTAN AVENUE',
  '11 PRINCE STREET',
  '108 WEST 25 STREET',
  '108 3 AVENUE',
  '107 EAST 31 STREET',
  '107 AVENUE A',
  '106 WEST 117 STREET',
  '105 3 AVENUE',
  '104 READE STREET',
  '104 CHARLTON STREET',
  '103 NORFOLK STREET',
  '103 GREENE STREET',
  '103 AVENUE A',
  '102 MADISON STREET',
  '102 BRADHURST AVENUE',
  '101 WEST 24 STREET',
  '101 ALLEN STREET',
  '100 WEST 93 STREET',
  '100 WEST 89 STREET',
  '100 UNITED NATIONS PLAZA',
  '100 RIVERSIDE BOULEVARD',
  '10 WEST END AVENUE',
  '10 UNION SQUARE EAST',
  '10 CHRISTOPHER STREET',
  '1 EAST 35 STREET',
  '1 BOND STREET'
  ]

8.times do |i|
  Property.create!(
  owner_user_id: 1,
  price: rand(2..7) * 1000,
  bathrooms: BATHROOMS.sample,
  bedrooms: BEDROOMS.sample
  )
end

8.times do |i|
  Address.create!(
  property_id: i + 1,
  street: ADDRESSES.sample,
  unit: "##{rand(1..15).to_s + ("A".."N").to_a.sample}",
  city: "New York City",
  state: "New York",
  zip: 10022
  )
end

8.times do |i|
  Photo.create!(
    property_id: i + 1,
    :image => File.open(
      "#{Rails.root}/public/images/Sample" + rand(1..10).to_s + ".jpg", 'r'
    )
  )
end

40.times do
  Photo.create!(
    property_id: rand(1..8),
    :image => File.open(
      "#{Rails.root}/public/images/Sample" + rand(1..10).to_s + ".jpg", 'r'
    )
  )
end


# file = File.open("#{Rails.root}/public/images/nyc#{Random.rand(21) + 1}.jpg")
#
# File.open("#{Rails.root}/public/images/Sample1.jpg")
#
# File.open("#{Rails.root}/public/images/Sample1.jpg", 'r')
#
# x = Photo.create!(:image => File.open("#{Rails.root}/public/images/Sample1.jpg", 'r'))
#
# Photo.each do |photo|
#   photo.image.url "Sample" + rand(1..11).to_s + ".jpg"
# end

# property1 = Property.create!(
#   owner_user_id: 1,
#   price: 3000,
#   bathrooms: 2,
#   bedrooms: 2
# )
#
# property2 = Property.create!(
#   owner_user_id: 1,
#   price: 6000,
#   bathrooms: 2
# )
#
# property3 = Property.create!(
#   owner_user_id: 1,
#   price: 6000
# )
#
# property4 = Property.create!(
#   owner_user_id: 1,
#   price: 5,
#   square_ft: 2114
# )

# address1 = Address.create!(
#   property_id: 1,
#   street: "959 First Avenue",
#   unit: "#17B",
#   city: "New York City",
#   state: "New York",
#   zip: 10022
# )
#
# address2 = Address.create!(
#   property_id: 2,
#   street: "5 Roebling Street",
#   unit: "#PHB",
#   city: "New York City",
#   state: "New York",
#   zip: 11211
# )
#
# address3 = Address.create!(
#   property_id: 3,
#   street: "15 Brpad Street",
#   unit: "1900",
#   city: "New York City",
#   state: "New York",
#   zip: 10005
# )
#
# address4 = Address.create!(
#   property_id: 4,
#   street: "5 Beekma Street",
#   unit: "#23C",
#   city: "New York City",
#   state: "New York",
#   zip: 10038
# )

# photo1 = Photo.create!(
#   property_id: 1,
# )
# photo11 = Photo.create!(
#   property_id: 1,
# )
# photo2 = Photo.create!(
#   property_id: 2,
# )
# photo3 = Photo.create!(
#   property_id: 3,
# )
# photo4 = Photo.create!(
#   property_id: 4,
# )
