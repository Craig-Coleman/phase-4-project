class ComicbookSerializer < ActiveModel::Serializer
  attributes :id, :series, :issue, :year_of_publication, :user_id, :publisher_id
end
