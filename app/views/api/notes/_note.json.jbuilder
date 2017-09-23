json.extract! note, :id, :title, :body, :updated_at
json.last_updated note.last_updated_in_words
json.notebook note.notebook, :id, :title
json.taggings note.taggings.each do |tagging|
  json.id tagging.id
  json.tag tagging.tag, :id, :name
end
