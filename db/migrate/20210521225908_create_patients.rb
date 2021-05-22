class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :phone
      t.text :body
      t.belongs_to :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
