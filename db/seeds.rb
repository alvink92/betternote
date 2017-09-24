# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", password: "password")


Notebook.create( owner_id: 1, title: "Chuck Norris")
Notebook.create(owner_id: 1, title: "How I Met your Mother")
Notebook.create(owner_id: 1, title: "Harry Potter")
Notebook.create(owner_id: 1, title: "Hitch Hikers Guide to the Galaxy")
Notebook.create(owner_id: 1, title: "Hey Arnold")

# notebook 1
Note.create( author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 1",
    body: Faker::ChuckNorris.fact)
Note.create( author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 2",
    body: Faker::ChuckNorris.fact)
Note.create(author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 3",
    body: Faker::ChuckNorris.fact)
Note.create(author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 4",
    body: Faker::ChuckNorris.fact)

# notebook 2
Note.create(author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 1",
  body: Faker::HowIMetYourMother.quote)
Note.create(author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 2",
  body: Faker::HowIMetYourMother.quote)
Note.create(author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 3",
  body: Faker::HowIMetYourMother.quote)
Note.create(author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 4",
  body: Faker::HowIMetYourMother.quote)

# notebook 3
Note.create(author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 1",
  body: Faker::HarryPotter.quote)
Note.create(author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 2",
  body: Faker::HarryPotter.quote)
Note.create(author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 3",
  body: Faker::HarryPotter.quote)
Note.create(author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 4",
  body: Faker::HarryPotter.quote)

# notebook 4
Note.create(author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 1",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 2",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 3",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 4",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)


Tag.create(name: "chuck", owner_id: 1)
Tag.create(name: "mother", owner_id: 1)
Tag.create(name: "harry", owner_id: 1)
Tag.create(name: "galaxy", owner_id: 1)

Tagging.create(tag_id: 1, note_id: 1)
Tagging.create(tag_id: 1, note_id: 2)
Tagging.create(tag_id: 1, note_id: 3)
Tagging.create(tag_id: 1, note_id: 4)
Tagging.create(tag_id: 2, note_id: 5)
Tagging.create(tag_id: 2, note_id: 6)
Tagging.create(tag_id: 2, note_id: 7)
Tagging.create(tag_id: 2, note_id: 8)
Tagging.create(tag_id: 3, note_id: 9)
Tagging.create(tag_id: 3, note_id: 10)
Tagging.create(tag_id: 3, note_id: 11)
Tagging.create(tag_id: 3, note_id: 12)
Tagging.create(tag_id: 4, note_id: 13)
Tagging.create(tag_id: 4, note_id: 14)
Tagging.create(tag_id: 4, note_id: 15)
Tagging.create(tag_id: 4, note_id: 16)
