class Api::NotesController < ApplicationController
  def index
    if params[:notebook_id]
      notebook = current_user.notebooks.where(notebook_id: params[:notebook_id])[0]
      if notebook
        @notes = notebook.notes
      else
        render json: ["Notebook doesn't exist!"], status: 404
        return
      end
    else
      @notes = current_user ? current_user.notes : []
    end
  end
end
