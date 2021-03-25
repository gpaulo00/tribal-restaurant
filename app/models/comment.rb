class Comment < ApplicationRecord
  belongs_to :restaurant

  validates :name, presence: true
  validates :comment, presence: true
end
