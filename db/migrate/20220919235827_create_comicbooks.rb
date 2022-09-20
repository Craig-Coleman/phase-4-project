class CreateComicbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :comicbooks do |t|
      t.string :series
      t.integer :issue
      t.integer :year_of_publication
      t.integer :user_id
      t.integer :publisher_id

      t.timestamps
    end
  end
end
