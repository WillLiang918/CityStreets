# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160110080304) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.integer  "property_id",  null: false
    t.string   "street",       null: false
    t.string   "unit",         null: false
    t.string   "city",         null: false
    t.string   "state",        null: false
    t.string   "zip",          null: false
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "neighborhood"
  end

  add_index "addresses", ["property_id"], name: "index_addresses_on_property_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "title"
    t.integer  "property_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "properties", force: :cascade do |t|
    t.integer  "owner_user_id", null: false
    t.integer  "price",         null: false
    t.integer  "bedrooms"
    t.decimal  "bathrooms"
    t.integer  "square_ft"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.text     "description"
  end

  add_index "properties", ["owner_user_id"], name: "index_properties_on_owner_user_id", using: :btree

  create_table "saved_properties", force: :cascade do |t|
    t.integer  "property_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
