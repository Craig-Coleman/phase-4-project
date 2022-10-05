class Publisher < ApplicationRecord
    has_many :comicbooks 
    has_many :users, through: :comicbooks 

    validates :name, { presence: true, uniqueness: true }
    validates :year_established, { presence: true, numericality: { only_integer: true } }
end
