class Api::NotesController < ApplicationController
  before_action :ensure_login

  def index
    @notes = []
    if params[:notebook_id]
      notebook = current_user.notebooks
                    .where(id: params[:notebook_id]).first
      if notebook
        @notes = notebook.notes
      else
        @notes = []
      end
    else
      @notes = current_user.notes
    end
  end

  def show
    @note = current_user.notes.where(id: params[:id]).first
    if @note
      render :show
    else
      render json: nil, status: 404
    end
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 400
    end
  end

  def update
    @note = Note.find_by_id(params[:id])
    if @note.author_id == current_user.id
      if @note.update(note_params)
        render :show
      else
        render json: ["Failed to update note"], status: 400
      end
    else
      render json: ["User doesn't have access to this note"], status: 403
    end
  end

  def destroy
    @note = current_user.notes.where(id: params[:id]).first
    if @note
      @note.destroy
      render :show
    else
      render json: ["Invalid note deletion request"], status: 400
    end
  end

  private

  def note_params
    params.require(:note).permit(:notebook_id, :title, :body)
  end
end
