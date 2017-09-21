# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", password: "password")


Notebook.create(owner_id: 1, title: "Chuck Norris")
Notebook.create(owner_id: 1, title: "How I Met your Mother")
Notebook.create(owner_id: 1, title: "Harry Potter")
Notebook.create(owner_id: 1, title: "Hitch Hikers Guide to the Galaxy")
Notebook.create(owner_id: 1, title: "Hey Arnold")

# notebook 1
Note.create(author_id: 1, notebook_id: 1,
   title: "Chuck Norris Fact 1",
    body: Faker::ChuckNorris.fact)
Note.create(author_id: 1, notebook_id: 1,
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
