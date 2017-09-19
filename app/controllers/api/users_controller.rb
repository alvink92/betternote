class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  # def show
  #   @user = User.find_by_id(params[:id])
  #   if @user
  #   else
  #     @user = User.new(username:"",password:"")
  #   end
  #   render :show
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
