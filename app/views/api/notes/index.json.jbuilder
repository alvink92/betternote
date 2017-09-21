json.array! @notes do |note|
  json.extract! note, :id, :title, :body
  json.notebook note.notebook, :id, :title
end
