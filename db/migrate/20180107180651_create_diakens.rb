class CreateDiakens < ActiveRecord::Migration[5.1]
  def change
    create_table :diakens do |t|
      t.references :congregation
      t.timestamps
    end
  end
end
