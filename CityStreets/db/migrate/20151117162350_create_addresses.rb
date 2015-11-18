class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :property_id, null: false
      t.string :street, null: false
      t.string :unit, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
