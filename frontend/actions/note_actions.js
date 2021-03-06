import * as NoteApiUtil from "../util/notes_api_util";
import { emptyNote } from "../util/entities_util";

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";
export const UPDATE_ONLY_NOTES_WITH_NOTE = "UPDATE_ONLY_NOTES_WITH_NOTE";

const receiveNote = note => {
  return {
    type: RECEIVE_NOTE,
    note
  };
};

const removeNote = note => {
  return {
    type: REMOVE_NOTE,
    note
  };
};

export const resetCurrNote = () => {
  return {
    type: RECEIVE_NOTE,
    note: emptyNote
  };
};

const receiveNotes = notes => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};

const updateOnlyNotesWithNote = note => {
  return {
    type: UPDATE_ONLY_NOTES_WITH_NOTE,
    note
  };
};

const receiveNoteErrors = errors => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors
  };
};

export const fetchNotes = () => dispatch => {
  return NoteApiUtil.getNotes().then(
    notes => dispatch(receiveNotes(notes)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const fetchNotebookNotes = notebookId => dispatch => {
  return NoteApiUtil.getNotebookNotes(notebookId).then(
    notes => dispatch(receiveNotes(notes)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const fetchTagNotes = tagId => dispatch => {
  return NoteApiUtil.getTagNotes(tagId).then(
    notes => dispatch(receiveNotes(notes)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const fetchNote = noteId => dispatch => {
  return NoteApiUtil.getNote(noteId).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const createNote = note => dispatch => {
  return NoteApiUtil.createNote(note).then(
    newNote => dispatch(receiveNote(newNote)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const updateNote = note => dispatch => {
  return NoteApiUtil.updateNote(note).then(
    updatedNote => dispatch(updateOnlyNotesWithNote(updatedNote)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};

export const deleteNote = noteId => dispatch => {
  return NoteApiUtil.deleteNote(noteId).then(
    removedNote => dispatch(removeNote(removedNote)),
    errors => dispatch(receiveNoteErrors(errors))
  );
};
