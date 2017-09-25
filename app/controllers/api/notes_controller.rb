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
        render json: ["notebook doesn't exist!"], status: 404
      end
    elsif params[:tag_id]
      tag = current_user.tags
                        .where(id: params[:tag_id]).first
      if tag
        @notes = tag.notes
      else
        render json: ["tag doesn't exist!"], status: 404
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
      render json: ["note doesn't exist!"], status: 404
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
    @note = current_user.notes.where(id: params[:id]).first
    if @note
      if @note.update(note_params)
        render :show
      else
        render json: @note.errors.full_messages, status: 400
      end
    else
      render json: ["Note note found"], status: 404
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
