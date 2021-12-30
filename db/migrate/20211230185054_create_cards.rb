class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :description
      t.string :suit
      t.integer :number
      t.string :type
      t.string :meaning_up
      t.string :meaning_rev

      t.timestamps
    end
  end
end
