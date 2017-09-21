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
      render json: ["Notebook note found/Invalid access"], status: 401
    end
  end

  def create
  end

  def destroy
    @notebook = Notebook.find_by_id(params[:id])
    if @notebook.owner_id == current_user.id
      @notebook.destroy
      render :show
    else
      render json: ["Unauthorized access to notebook"], status: 401
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
