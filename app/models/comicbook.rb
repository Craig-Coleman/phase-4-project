class Comicbook < ApplicationRecord
    belongs_to :user 
    belongs_to :publisher 

    validates :series, presence: true 
    validates :issue, { presence: true, numericality: { only_integer: true } } 
    validates :year_of_publication, { presence: true, numericality: { only_integer: true } }
    validates :publisher_id, { presence: true, numericality: { only_integer: true } }
end
