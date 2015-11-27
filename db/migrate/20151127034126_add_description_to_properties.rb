class AddDescriptionToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :description, :text
  end
end
