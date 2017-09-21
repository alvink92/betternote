class AddOwnerIdToTag < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :owner_id, :integer, null: false
    add_index :tags, :owner_id
    add_index :tags, [:owner_id, :name], unique: true
  end
end
