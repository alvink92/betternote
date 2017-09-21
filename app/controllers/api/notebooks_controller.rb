class Api::NotebooksController < ApplicationController
  before_action :ensure_login

  def index
    @notebooks = current_user.notebooks
  end

  def show
    @notebook = current_user.notebooks.where(id: params[:id]).first
    if @notebook
      render :show
    else
      render json: ["Notebook note found/Invalid access"], status: 404
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.owner_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 400
    end
  end

  def update
    @notebook = current_user.notebooks.where(id: params[:id]).first
    if @notebook
      if @notebook.update(notebook_params)
        render :show
      else
        render json: @notebook.errors.full_messages, status: 400
      end
    else
      render json: ["Notebook note found"], status: 404
    end
  end

  def destroy
    @notebook = current_user.notebooks.where(id: params[:id]).first
    if @notebook
      @notebook.destroy
      render :show
    else
      render json: ["Unauthorized access to/Non-existing notebook"], status: 401
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
