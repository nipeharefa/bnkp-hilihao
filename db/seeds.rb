# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

references = Hash.new

# Seeder Lingkungan
5.times do |item|
    lingkungan = Lingkungan.new
    lingkungan.name = item + 1
    lingkungan.save
end

# Faker::Config.locale = 'id'

# gender = [:man, :woman]
# 10.times do |items|
#     congregation = Congregation.new
#     if 1 === items
#         congregation.name = "Nipe Setiawan Harefa"
#         congregation.place_of_birth = "Perawang"
#         congregation.date_of_birth = DateTime.new(1995, 7, 15)
#         congregation.gender = 'man'
#     else
#         congregation.name = Faker::Name.name
#         congregation.place_of_birth = Faker::Address.city
#         congregation.date_of_birth = (rand(10...30)).years.ago
#         congregation.gender = gender.sample
#     end
#     congregation.uuid = SecureRandom.uuid
#     congregation.save

#     if (20 >= items)
#         references.store(sprintf("jemaat-%d", items), congregation)
#     end
# end

# # Generate data Baptis
# 2.times do |index|
#     baptism = Baptism.new
#     if 1 === index
#         baptism.baptism_at = Date.new(1995, 12, 25)
#         baptism.church_name = "GPIB Sumatera Bagian Barat"
#         baptism.pastor = "Pdt. As. Sihotang"
#     else
#         # baptism.baptism_at = Date.new(1995, 12, 25)
#         baptism.church_name = Faker::University.name
#         baptism.pastor = Faker::SiliconValley.character
#     end
#     baptism.baptism_number = SecureRandom.uuid
#     baptism.congregation = references[sprintf('jemaat-%d', index)]
#     baptism.save
# end

# status = [:satua_niha_keriso, :staff, :bendahara]
# # Generate 20 SNK
# 5.times do | index |
#     Diaken.create({congregation: references[sprintf('jemaat-%d', index)]})
# end