class Publisher < ApplicationRecord
    has_many :comicbooks 
    has_many :users, through: :comicbooks 

    validates :name, { presence: true, uniqueness: true }
end
