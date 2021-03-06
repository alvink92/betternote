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
      tags = []

      new_tags.each do |tag|
        found_tag = Tag.where(owner_id: current_user.id).where(name: tag[:name])[0]
        if found_tag
          tags.push(found_tag)
        else
          new_tag = Tag.create(owner_id: current_user.id, name: tag[:name])
          tags.push(new_tag)
        end
      end

      tags.each do |tag|
        Tagging.create(owner_id: current_user.id, note_id: @note.id, tag_id: tag[:id])
      end

      render :show
    else
      render json: @note.errors.full_messages, status: 400
    end
  end

  def update
    @note = current_user.notes.where(id: params[:id]).first

    if @note
      tags = []

      new_tags.each do |tag|
        found_tag = Tag.where(owner_id: current_user.id).where(name: tag[:name])[0]
        if found_tag
          tags.push(found_tag)
        else
          new_tag = Tag.create(owner_id: current_user.id, name: tag[:name])
          tags.push(new_tag)
        end
      end

      tags.each do |tag|
        Tagging.create(owner_id: current_user.id, note_id: @note.id, tag_id: tag[:id])
      end

      if @note.update(note_params)
        @note = Note.find_by_id(@note.id)
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

  def new_tags
    if params[:note][:tags]
      return params[:note][:tags].values.select{|tag| !tag[:id]}
    else
      return []
    end
  end

  def note_params
    params.require(:note).permit(:notebook_id, :title, :body)
  end
end
