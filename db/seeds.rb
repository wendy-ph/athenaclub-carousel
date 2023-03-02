# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Wiping database..."
Product.destroy_all
puts "Done."

path = File.join(File.dirname(__FILE__), "./products.json")
records = JSON.parse(File.read(path))
records["products"].each do |r|
  Product.create!(r)
  puts "Created #{r["name"]}"
end
puts "All products are seeded"
