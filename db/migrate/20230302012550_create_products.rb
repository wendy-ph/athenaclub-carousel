class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :imageUrl
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
