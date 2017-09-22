export const getNotes = () => {
  return $.ajax({
    method: "GET",
    url: "api/notes"
  });
};

export const getNote = noteId => {
  return $.ajax({
    method: "GET",
    url: `api/notes/${noteId}`
  });
};

export const getNotebookNotes = notebookId => {
  return $.ajax({
    method: "GET",
    url: `api/notebooks/${notebookId}/notes`
  });
};

export const getTagNotes = tagId => {
  return $.ajax({
    method: "GET",
    url: `api/tags/${tagId}/notes`
  });
};

export const createNote = note => {
  return $.ajax({
    method: "POST",
    url: "api/notes",
    data: { note }
  });
};

export const updateNote = note => {
  return $.ajax({
    method: "PATCH",
    url: `api/notes/${note.id}`,
    data: { note }
  });
};

export const deleteNote = noteId => {
  return $.ajax({
    method: "DELETE",
    url: `api/notes/${noteId}`
  });
};
