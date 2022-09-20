class User < ApplicationRecord
    has_many :comicbooks 
    has_many :publishers, through: :comicbooks 
end
