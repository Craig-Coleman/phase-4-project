class User < ApplicationRecord
    has_many :comicbooks 
    has_many :publishers, through: :comicbooks 

    validates :username, { presence: true, uniqueness: true, length: { in: 6..20 } } 
end
