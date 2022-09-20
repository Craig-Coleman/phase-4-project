class AddCoverArtUrlToComicbooks < ActiveRecord::Migration[6.1]
  def change
    add_column :comicbooks, :cover_art_url, :string 
  end
end
