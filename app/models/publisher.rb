class Publisher < ApplicationRecord
    has_many :comicbooks 
    has_many :users, through: :comicbooks 
end
