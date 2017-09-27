class Api::TaggingsController < ApplicationController
  before_action :ensure_login

  def create
    tag = Tag.find_by_id(tagging_params[:tag_id])
    note = Note.find_by_id(taggin_params[:note_id])

    if tag.owner_id != note.author_id
      render json: ["Forbidden taggings creation"], status: 403
      return
    end

    if tag.owner_id != current_user.id
      render json: ["Unauthorized user"], status: 401
    end

    @tagging = Tagging.new(tagging_params)

    if @tagging.save
      render json: @tagging
    else
      render json: @tagging.errors.full_messages, status: 400
    end
  end

  def destroy
    @tagging = current_user.taggings.find_by(
      note_id: tagging_params[:note_id],
      tag_id: tagging_params[:tag_id])
    @tagging.destroy
    render json: @tagging
  end

  private

  def tagging_params
    params.require(:tagging).permit(:tag_id, :note_id)
  end
end
