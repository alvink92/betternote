class AddTitleIndexToNotebooks < ActiveRecord::Migration[5.1]
  def change
    add_index :notebooks, :title
  end
end
