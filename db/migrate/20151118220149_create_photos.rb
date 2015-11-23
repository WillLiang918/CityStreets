class CreatePhotos < ActiveRecord::Migration
  def change    
    create_table :photos do |t|
      t.string :title
      t.integer :property_id

      t.timestamps null: false
    end
  end
end
