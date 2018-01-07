# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

references = Hash.new

Faker::Config.locale = 'id'

gender = [:man, :woman]
50.times do |items|
    congregation = Congregation.new
    congregation.name = Faker::Name.name
    congregation.place_of_birth = Faker::Address.city
    congregation.date_of_birth = (rand(10...30)).years.ago
    congregation.uuid = SecureRandom.uuid
    congregation.gender = gender.sample
    congregation.save

    if (20 >= items)
        references.store(sprintf("jemaat-%d", items), congregation)
    end
end


status = [:satua_niha_keriso, :staff, :bendahara]
# Generate 20 SNK
20.times do | index |
    Diaken.create({congregation: references[sprintf('jemaat-%d', index)]})
end