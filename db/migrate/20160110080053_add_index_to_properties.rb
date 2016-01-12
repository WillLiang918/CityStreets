class AddIndexToProperties < ActiveRecord::Migration
  def change
    add_index :properties, :owner_user_id
  end
end
