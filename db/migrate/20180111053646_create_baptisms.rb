class CreateBaptisms < ActiveRecord::Migration[5.1]
  def change
    create_table :baptisms do |t|
        t.string :baptism_number
        t.date :baptism_at
        t.string :pastor
        t.string :church_name
        t.references :congregation
        t.timestamps
    end
  end
end
