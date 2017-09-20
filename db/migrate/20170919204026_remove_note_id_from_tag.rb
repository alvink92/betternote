class RemoveNoteIdFromTag < ActiveRecord::Migration[5.1]
  def change
    remove_index :tags, :note_id
    remove_index :tags, [:note_id, :name]
    remove_column :tags, :note_id
  end
end
