class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.integer :owner_user_id, null: false
      t.integer :price, null: false
      t.integer :bedrooms
      t.decimal :bathrooms
      t.integer :square_ft

      t.timestamps null: false
    end
  end
end
