class Restaurant < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :direction, presence: true
    validates :image, presence: true

    has_many :images
end
