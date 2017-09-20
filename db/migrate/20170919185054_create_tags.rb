class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :note_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :tags, :note_id
    add_index :tags, [:note_id, :name], unique: true
  end
end
