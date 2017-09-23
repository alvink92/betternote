class Api::TagsController < ApplicationController
  before_action :ensure_login

  def index
    @tags = current_user.tags
  end

  def show
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      render :show
    else
      render json: ["Tag not found/Invalid Access"], status: 404
    end
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.owner_id = current_user.id
    
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 400
    end
  end

  def update
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      if @tag.update(tag_params)
        render :show
      else
        render json: @tag.errors.full_messages, status: 400
      end
    else
      render json: ["tag note found"], status: 404
    end
  end

  def destroy
    @tag = current_user.tags.where(id: params[:id]).first
    if @tag
      @tag.destroy
      render :show
    else
      render json: ["Unauthorized access to/Non-existing tag"], status: 401
    end
  end

  private

  def tag_params
    return params.require(:tag).permit(:name)
  end
end
