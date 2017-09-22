# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(id: 1, username: "demo", password: "password")


Notebook.create(id: 1, owner_id: 1, title: "Chuck Norris")
Notebook.create(id: 2,owner_id: 1, title: "How I Met your Mother")
Notebook.create(id: 3,owner_id: 1, title: "Harry Potter")
Notebook.create(id: 4,owner_id: 1, title: "Hitch Hikers Guide to the Galaxy")
Notebook.create(id: 5,owner_id: 1, title: "Hey Arnold")

# notebook 1
Note.create(id: 1, author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 1",
    body: Faker::ChuckNorris.fact)
Note.create(id: 2, author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 2",
    body: Faker::ChuckNorris.fact)
Note.create(id: 3, author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 3",
    body: Faker::ChuckNorris.fact)
Note.create(id: 4, author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 4",
    body: Faker::ChuckNorris.fact)

# notebook 2
Note.create(id: 5, author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 1",
  body: Faker::HowIMetYourMother.quote)
Note.create(id: 6, author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 2",
  body: Faker::HowIMetYourMother.quote)
Note.create(id: 7, author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 3",
  body: Faker::HowIMetYourMother.quote)
Note.create(id: 8, author_id: 1, notebook_id: 2,
  title: "How I Met your Mother Quote 4",
  body: Faker::HowIMetYourMother.quote)

# notebook 3
Note.create(id: 9, author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 1",
  body: Faker::HarryPotter.quote)
Note.create(id: 10, author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 2",
  body: Faker::HarryPotter.quote)
Note.create(id: 11, author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 3",
  body: Faker::HarryPotter.quote)
Note.create(id: 12, author_id: 1, notebook_id: 3,
  title: "Harry Potter Quote 4",
  body: Faker::HarryPotter.quote)

# notebook 4
Note.create(id: 13, author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 1",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(id: 14, author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 2",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(id: 15, author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 3",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)
Note.create(id: 16, author_id: 1, notebook_id: 4,
  title: "Hitch Hikers Guide to the Galaxy Quote 4",
  body: Faker::HitchhikersGuideToTheGalaxy.quote)


Tag.create(id: 1, name: "chuck", owner_id: 1)
Tag.create(id: 2, name: "mother", owner_id: 1)
Tag.create(id: 3, name: "harry", owner_id: 1)
Tag.create(id: 4, name: "galaxy", owner_id: 1)

Tagging.create(id: 1, tag_id: 1, note_id: 1)
Tagging.create(id: 2, tag_id: 1, note_id: 2)
Tagging.create(id: 3, tag_id: 1, note_id: 3)
Tagging.create(id: 4, tag_id: 1, note_id: 4)
Tagging.create(id: 5, tag_id: 2, note_id: 5)
Tagging.create(id: 6, tag_id: 2, note_id: 6)
Tagging.create(id: 7, tag_id: 2, note_id: 7)
Tagging.create(id: 8, tag_id: 2, note_id: 8)
Tagging.create(id: 9, tag_id: 3, note_id: 9)
Tagging.create(id: 10, tag_id: 3, note_id: 10)
Tagging.create(id: 11, tag_id: 3, note_id: 11)
Tagging.create(id: 12, tag_id: 3, note_id: 12)
Tagging.create(id: 13, tag_id: 4, note_id: 13)
Tagging.create(id: 14, tag_id: 4, note_id: 14)
Tagging.create(id: 15, tag_id: 4, note_id: 15)
Tagging.create(id: 16, tag_id: 4, note_id: 16)
