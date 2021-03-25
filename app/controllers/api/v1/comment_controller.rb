class Api::V1::CommentController < ApplicationController
  def show
    com = Comment.all.where(restaurant_id: params[:id]).order(created_at: :desc)
    render json: com
  end

  def create
    comment = Comment.create!(comment_params)
    if comment
      render json: comment
    else
      render json: comment.errors
    end
  end

  # parametros
  private
  def comment_params
    params.permit(:name, :comment, :restaurant_id)
  end
end
