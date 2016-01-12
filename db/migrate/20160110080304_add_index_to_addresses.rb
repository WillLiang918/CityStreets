class AddIndexToAddresses < ActiveRecord::Migration
  def change
    add_index :addresses, :property_id
  end
end
