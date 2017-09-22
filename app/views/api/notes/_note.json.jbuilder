json.extract! note, :id, :title, :body
json.last_updated note.last_updated_in_words
json.notebook note.notebook, :id, :title, :updated_at
