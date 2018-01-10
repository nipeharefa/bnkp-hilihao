class CreateDiakens < ActiveRecord::Migration[5.1]
  def change
    create_table :diakens do |t|
      # t.string :type
      # t.boolean :enabled
      t.references :congregation
      t.timestamps
    end
  end
end
