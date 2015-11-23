class SavedProperties < ActiveRecord::Migration
  def change
    create_table :saved_properties do |t|
      t.integer :property_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
