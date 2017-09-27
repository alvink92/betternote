class AddOwnerIdToTaggings < ActiveRecord::Migration[5.1]
  def change
    add_column :taggings, :owner_id, :integer, null: false
    add_index :taggings, :owner_id
  end
end
