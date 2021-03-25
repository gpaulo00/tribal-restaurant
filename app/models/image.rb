class Image < ApplicationRecord
  belongs_to :restaurant

  validates :path, presence: true
end
