class CreateEducations < ActiveRecord::Migration[5.1]
  def change
    create_table :educations do |t|
      t.string :school_name
      t.date :date_of_graduate
      t.string :degree
      t.references :congregation
      t.timestamps
    end
  end
end
