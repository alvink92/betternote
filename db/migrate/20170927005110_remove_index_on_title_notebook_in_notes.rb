class RemoveIndexOnTitleNotebookInNotes < ActiveRecord::Migration[5.1]
  def change
    remove_index :notes, [:notebook_id, :title]
  end
end
