# Schema Information

## photos
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    |
property_id  | integer   | not null, foreign key (references properties), indexed

## properties
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
owner_user_id| integer   | not null, foreign key (references users), indexed
price        | integer   | not null
bedrooms     | integer   |
bathrooms    | decimal   |
square_ft    | integer   |

## address
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
property_id  | integer   | not null, foreign key (references properties), indexed
street       | string    | not null
unit         | string    | not null
city         | string    | not null
state        | string    | not null
zip          | string    | not null
latitude     | float     |
longitude    | float     |

## saved_properties
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
owner_user_id| integer   | not null, foreign key (references users), indexed
property_id  | integer   | not null, foreign key (references properties), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
