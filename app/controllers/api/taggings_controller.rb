class Api::TaggingsController < ApplicationController
  before_action :ensure_login

  # INCOMING VERY HACKY CODE

  def create
    @tag = current_user.tags.find_by_name(tagging_params[:tag_name])
    unless @tag
      @tag = Tag.create(name: tagging_params[:tag_name], owner_id: current_user.id)
    end
    note = Note.find_by_id(tagging_params[:note_id])

    if @tag.owner_id != note.author_id
      render json: ["Forbidden taggings creation"], status: 403
      return
    end

    if @tag.owner_id != current_user.id
      render json: ["Unauthorized user"], status: 401
    end

    @tagging = Tagging.new(tag_id: @tag.id,
       note_id: tagging_params[:note_id], owner_id: current_user.id)

    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 400
    end
  end

  def destroy
    @tag = current_user.tags.find_by_name(tagging_params[:tag_name])
    @tagging = current_user.taggings.find_by(
      note_id: tagging_params[:note_id],
      tag_id: @tag.id)
    if @tagging.destroy
      render :show
    else
      render json: @tagging.errors.full_messages, status: 400
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:tag_name, :note_id)
  end
end
