import * as NotebookApiUtil from "../util/notebooks_api_util";

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

const receiveNotebook = notebook => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  };
};

const removeNotebook = notebook => {
  return {
    type: REMOVE_NOTEBOOK,
    notebook
  };
};

const receiveNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

const receiveNotebookErrors = errors => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
  };
};

export const fetchNotebooks = () => dispatch => {
  return NotebookApiUtil.getNotebooks().then(
    notebooks => dispatch(receiveNotebooks(notebooks)),
    errors => dispatch(receiveNotebookErrors(errors))
  );
};

export const fetchNotebook = notebookId => dispatch => {
  return NotebookApiUtil.getNotebook(notebookId).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveNotebookErrors(errors))
  );
};

export const createNotebook = notebook => dispatch => {
  return NotebookApiUtil.createNotebook(notebook).then(
    newNotebook => dispatch(receiveNotebook(newNotebook)),
    errors => dispatch(receiveNotebookErrors(errors))
  );
};

export const updateNotebook = notebook => dispatch => {
  return NotebookApiUtil.updateNotebook(notebook).then(
    updatedNotebook => dispatch(receiveNotebook(updatedNotebook)),
    errors => dispatch(receiveNotebookErrors(errors))
  );
};

export const deleteNotebook = notebookId => dispatch => {
  return NotebookApiUtil.deleteNotebook(notebookId).then(
    removedNotebook => dispatch(removeNotebook(removedNotebook)),
    errors => dispatch(receiveNotebookErrors(errors))
  );
};
