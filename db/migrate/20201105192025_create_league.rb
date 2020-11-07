class CreateLeague < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name, null: false
      t.string :number_of_teams, null: false
      t.integer :year_founded, null: false
      t.text :description, null: false

      t.timestamps

    end
  end
end
