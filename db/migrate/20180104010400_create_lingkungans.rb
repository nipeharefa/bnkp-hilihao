class CreateLingkungans < ActiveRecord::Migration[5.1]
  def change
    create_table :lingkungans do |t|
      t.string :name
      t.timestamps
    end
  end
end
