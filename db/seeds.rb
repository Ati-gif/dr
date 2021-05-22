# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

Doctor.destroy_all
Patient.destroy_all

@id_num

2.times do
  @id_num =+ 1
  Doctor.create(first_name: Faker::Name.name)

  2.times do
    Patient.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)
  end
end

puts "Doctors created, Patients created"