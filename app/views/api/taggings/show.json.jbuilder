json.tag do
  json.extract! @tag, :id, :name
end
json.noteId @tagging.note_id
