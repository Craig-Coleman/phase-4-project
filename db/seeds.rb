# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Starting seeding...'

user = User.create(username: 'Craig')
publisher = Publisher.create(name: 'DC Comics', year_established: 1939)
user.comicbooks.create(series: "Detective Comics", issue: 27, year_of_publication: 1939, publisher_id: 1)

puts 'Seeding finished!'
