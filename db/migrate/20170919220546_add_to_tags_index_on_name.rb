class AddToTagsIndexOnName < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, :name
  end
end
