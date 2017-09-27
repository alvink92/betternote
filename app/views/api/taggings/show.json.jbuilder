json.tag do
  json.extract! @tag, :id, :name
  json.noteIds @tag.notes.ids
end
json.noteId @tagging.note_id
