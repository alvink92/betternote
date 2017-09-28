json.extract! note, :id, :title, :body, :updated_at, :created_at
json.username note.author.username
json.last_updated note.last_updated_in_words
json.notebook note.notebook, :id, :title
json.tags note.tags.each do |tag|
  json.id tag.id
  json.name tag.name
end
