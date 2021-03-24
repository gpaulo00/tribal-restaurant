class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :direction, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
