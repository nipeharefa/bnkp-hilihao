class CreateCongregations < ActiveRecord::Migration[5.1]
  def change
    create_table :congregations do |t|
      t.integer :lingkungan_id, null: true
      t.string :name
      t.string :uuid
      t.string :place_of_birth
      t.datetime :date_of_birth
      t.integer :last_education, null: true
      t.integer :last_lingkungan, null: true
      t.integer :last_marriage, null: true
      t.string :gender
      t.timestamps
    end
  end
end
