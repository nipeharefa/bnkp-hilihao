class AddGabunganToLingkungns < ActiveRecord::Migration[5.1]
  def change
    add_column :lingkungans, :gabungan_id, :bigint, null: true, after: :id
  end
end
