# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", password: "password")

Notebook.create(owner_id: User.find_by_username("demo").id, title: "Recipes")
Notebook.create(owner_id: User.find_by_username("demo").id, title: "Physics")
Notebook.create(owner_id: User.find_by_username("demo").id, title: "Underwater Basketweaving 99")
Notebook.create(owner_id: User.find_by_username("demo").id, title: "CS 101")
Notebook.create(owner_id: User.find_by_username("demo").id, title: "Workout Routines")
Notebook.create(owner_id: User.find_by_username("demo").id, title: "Todos")



Note.create( author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Recipes").id,
   title: "Authentic Pho Recipe",
    body: "<p><img src=\"http://images.media-allrecipes.com/userphotos/720x405/4536070.jpg\"></p><p><br></p><p><span class=\"ql-size-large\">Ingredients</span></p><p><br></p><ul><li>4 pounds beef soup bones</li><li>1 onion, unpeeled and cut in half</li></ul><p><img src=\"http://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94546/recipeId/481718/upcValue/33383040820/entityType/promotion/entityId/43418599/retailerLocationId/63183/usage/getRecipeInformationByExternalId/promotion/200x188/34/33383040820_1.jpg.d.jpg\"></p><ul><li>5 slices fresh ginger</li><li>1 tablespoon salt</li><li>2 pods star anise</li><li>2 1/2 tablespoons fish sauce</li><li>4 quarts water</li><li>1 (8 ounce) package dried rice noodles</li><li>1 1/2 pounds beef top sirloin, thinly sliced</li><li><strong>Beef Steak Certified Angus Top Sirloin</strong>&nbsp;</li></ul><p><img src=\"http://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94546/recipeId/481718/upcValue/26223700000/entityType/promotion/entityId/43418579/retailerLocationId/63183/usage/getRecipeInformationByExternalId/promotion/200x188/34/26223700000_1.jpg.d.jpg\"></p><ul><li>1/2 cup chopped cilantro</li><li>1 tablespoon chopped green onion</li><li>1 1/2 cups bean sprouts</li><li>1 bunch Thai basil</li><li>1 lime, cut into 4 wedges</li><li>1/4 cup hoisin sauce (optional)</li><li>1/4 cup chile-garlic sauce (such as Sriracha®) (optional)</li><li>Add all ingredients to list</li></ul><p><br></p><h2>Directions</h2><p><br></p><ol><li>Preheat oven to 425 degrees F (220 degrees C).</li><li>Place beef bones on a baking sheet and roast in the preheated oven until browned, about 1 hour.</li><li>Place onion on a baking sheet and roast in the preheated oven until blackened and soft, about 45 minutes.</li><li>Place bones, onion, ginger, salt, star anise, and fish sauce in a large stockpot and cover with 4 quarts of water. Bring to a boil and reduce heat to low. Simmer on low for 6 to 10 hours. Strain the broth into a saucepan and set aside.</li><li>Place rice noodles in large bowl filled with room temperature water and allow to soak for 1 hour. Bring a large pot of water to a boil and after the noodles have soaked, place them in the boiling water for 1 minute. Bring stock to a simmer.</li><li>Divide noodles among 4 serving bowls; top with sirloin, cilantro, and green onion. Pour hot broth over the top. Stir and let sit until the beef is partially cooked and no longer pink, 1 to 2 minutes. Serve with bean sprouts, Thai basil, lime wedges, hoisin sauce, and chile-garlic sauce on the side.</li></ol>"
  )

Note.create( author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Recipes").id,
   title: "Pasta Primavera",
    body: "<p><img src=\"http://images.media-allrecipes.com/userphotos/720x405/4536070.jpg\"></p><p><br></p><p><span class=\"ql-size-large\">Ingredients</span></p><p><br></p><ul><li>4 pounds beef soup bones</li><li>1 onion, unpeeled and cut in half</li></ul><p><img src=\"http://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94546/recipeId/481718/upcValue/33383040820/entityType/promotion/entityId/43418599/retailerLocationId/63183/usage/getRecipeInformationByExternalId/promotion/200x188/34/33383040820_1.jpg.d.jpg\"></p><ul><li>5 slices fresh ginger</li><li>1 tablespoon salt</li><li>2 pods star anise</li><li>2 1/2 tablespoons fish sauce</li><li>4 quarts water</li><li>1 (8 ounce) package dried rice noodles</li><li>1 1/2 pounds beef top sirloin, thinly sliced</li><li><strong>Beef Steak Certified Angus Top Sirloin</strong>&nbsp;</li></ul><p><img src=\"http://images.groceryserver.com/groceryserver/haxor/log/clientId/bfeb1eb4e751f03bceffaa649e977927/zipCode/94546/recipeId/481718/upcValue/26223700000/entityType/promotion/entityId/43418579/retailerLocationId/63183/usage/getRecipeInformationByExternalId/promotion/200x188/34/26223700000_1.jpg.d.jpg\"></p><ul><li>1/2 cup chopped cilantro</li><li>1 tablespoon chopped green onion</li><li>1 1/2 cups bean sprouts</li><li>1 bunch Thai basil</li><li>1 lime, cut into 4 wedges</li><li>1/4 cup hoisin sauce (optional)</li><li>1/4 cup chile-garlic sauce (such as Sriracha®) (optional)</li><li>Add all ingredients to list</li></ul><p><br></p><h2>Directions</h2><p><br></p><ol><li>Preheat oven to 425 degrees F (220 degrees C).</li><li>Place beef bones on a baking sheet and roast in the preheated oven until browned, about 1 hour.</li><li>Place onion on a baking sheet and roast in the preheated oven until blackened and soft, about 45 minutes.</li><li>Place bones, onion, ginger, salt, star anise, and fish sauce in a large stockpot and cover with 4 quarts of water. Bring to a boil and reduce heat to low. Simmer on low for 6 to 10 hours. Strain the broth into a saucepan and set aside.</li><li>Place rice noodles in large bowl filled with room temperature water and allow to soak for 1 hour. Bring a large pot of water to a boil and after the noodles have soaked, place them in the boiling water for 1 minute. Bring stock to a simmer.</li><li>Divide noodles among 4 serving bowls; top with sirloin, cilantro, and green onion. Pour hot broth over the top. Stir and let sit until the beef is partially cooked and no longer pink, 1 to 2 minutes. Serve with bean sprouts, Thai basil, lime wedges, hoisin sauce, and chile-garlic sauce on the side.</li></ol>"
  )

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Recipes").id,
   title: "Pasta primavera",
    body: "<p><img class=\"o-AssetMultiMedia__a-Image\" src=\"http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595164628.jpeg\" alt=\"Pasta Primavera\"></p><p><br></p><h3>Ingredients</h3><p><br></p><ul><li>Kosher salt</li><li>12 ounces fusilli or other corkscrew pasta</li><li>1/2 pound sugar snap peas, halved lengthwise, or broccoli florets (or a combination)</li><li>2 carrots, shredded</li><li>1 yellow bell pepper, cut into thin strips</li><li>1/4 cup extra-virgin olive oil, plus more for drizzling</li><li>4 cloves garlic, thinly sliced</li><li>1 pint cherry tomatoes, halved</li><li>1/4 to 1/2 teaspoon red pepper flakes</li><li>1/2 cup roughly chopped fresh mint</li><li>1/2 cup grated parmesan cheese</li><li>4 ounces goat cheese, crumbled</li></ul><p><br></p><h3>Directions</h3><p><br></p><p>Bring a large pot of salted water to a boil. Add the fusilli and cook as the label directs. Add the sugar snap peas and/or broccoli, carrots and bell pepper to the boiling water during the last 2 minutes of cooking. Reserve 1/2 cup cooking water, then drain the pasta and vegetables and return to the pot.</p><p>Meanwhile, heat the olive oil in a large skillet over medium heat. Add the garlic and cook until just golden, about 30 seconds. Add the tomatoes, red pepper flakes and 1 teaspoon salt; cook until the tomatoes begin to wilt, about 2 minutes. Stir in 1/4 cup of the reserved cooking water. Pour the tomato mixture over the pasta and vegetables. Add the mint, parmesan and half the goat cheese and toss to combine. Season with salt.</p><p>Divide the pasta among bowls. Top with the remaining goat cheese and drizzle with olive oil.</p>"
  )

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Recipes").id,
   title: "Mac N Cheese",
    body: "<p><img class=\"o-AssetMultiMedia__a-Image\" src=\"http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597326801.jpeg\" alt=\"Tiramisu\"></p><p><br></p><h3>Ingredients</h3><p><br></p><ul><li>6 large egg yolks</li><li>3/4 cup sugar</li><li>3/4 cup whole milk</li><li>Four 8-ounce containers mascarpone cheese, at room temperature</li><li>1 1/2 cups espresso or strong coffee, at room temperature</li><li>1/2 cup brandy or cognac</li><li>30 to 32 crisp Italian ladyfingers (savoiardi)</li><li>1/4 cup Dutch-process cocoa powder</li><li>Bittersweet chocolate, for shaving</li></ul><p><br></p><h3>Directions</h3><p><br></p><p>Line an 8-inch-square baking dish with plastic wrap, leaving a 3-inch overhang on all sides. Fill a large bowl with ice water.</p><p>Make the custard: Whisk the egg yolks and sugar in a heatproof bowl set over a saucepan of barely simmering water (do not let the bowl touch the water) until the sugar dissolves. Slowly whisk in the milk and cook, whisking constantly, until the custard is light and foamy, about 10 minutes (a thermometer inserted into the mixture should register 170 degrees F).</p><p>Remove the bowl from the saucepan and set in the bowl of ice water; whisk until the custard is cool, about 1 minute. Put the mascarpone in a large bowl. Fold the custard into the mascarpone with a rubber spatula until almost combined, then whisk until just smooth (do not overmix or the custard will be grainy).</p><p>Combine the espresso and brandy in a shallow bowl. One at a time, dip the ladyfingers in the espresso mixture until soaked but not soggy; arrange 2 rows of about 5 biscuits each in the baking dish. Spread one-third of the mascarpone custard over the ladyfingers. Repeat with a second layer of espresso-dipped ladyfingers, arranging them in the opposite direction. Top with another one-third of the custard. Repeat with the remaining ladyfingers, alternating directions. Spread the remaining custard on top and dust with the cocoa powder. Cover with plastic wrap; refrigerate at least 4 hours, or overnight.</p><p>Invert a plate on top of the tiramisu, then flip the tiramisu with the plate. Remove the baking dish and plastic wrap. Invert a serving plate on top of the tiramisu and flip again so it is cocoa-side up. Remove the remaining plastic wrap. Shave curls of chocolate on top with a vegetable peeler.</p><p><br></p>"
  )

  Note.create(author_id: User.find_by_username("demo").id,
   notebook_id: Notebook.find_by_title("Recipes").id,
     title: "8 Recipes for Octopus",
      body: "<h3>INGREDIENTS</h3><ul><li><strong>3</strong>&nbsp;<strong>pounds cleaned&nbsp;octopus</strong></li><li><strong>1</strong>&nbsp;<strong>bay leaf</strong></li><li><strong>4</strong>&nbsp;<strong>thyme&nbsp;branches</strong></li><li><strong>20</strong>&nbsp;<strong>peppercorns</strong></li><li><strong>1</strong>&nbsp;<strong>teaspoon&nbsp;salt, plus to taste</strong></li><li><strong>1</strong>&nbsp;<strong>head&nbsp;garlic, cut in half along its equator</strong></li><li><strong>3</strong>&nbsp;<strong>lemons</strong></li><li><strong>3</strong>&nbsp;<strong>tablespoons extra virgin&nbsp;olive oil</strong></li><li>&nbsp;<strong>Freshly ground&nbsp;black pepper&nbsp;to taste</strong></li><li>&nbsp;<strong>Minced&nbsp;parsley&nbsp;for garnish</strong></li></ul><p><br></p><h3>PREPARATION</h3><ol><li>Combine octopus, bay leaf, thyme, peppercorns, 1 teaspoon salt, garlic and 1 lemon, cut in half, in saucepan along with water to cover. Turn heat to medium, cover, and bring to boil. Adjust heat so that liquid simmers slowly, and cook until octopus is tender, for 30 to 90 minutes, depending on whether you're using two smaller octopuses or 1 larger one (check for doneness with point of sharp knife). Drain, discarding everything but octopus. (You can prepare this 24 hours in advance up to this point; cover, and refrigerate octopus.) Set aside.</li><li>Start charcoal or wood fire, or preheat gas grill; fire should be quite hot. Grill rack about 4 inches from heat source. Cut octopus into large serving pieces, brush it with half the olive oil, and sprinkle it with salt and pepper. Grill it quickly until outside browns but inside is not dried out. Cut remaining lemon into wedges.</li><li>Brush octopus with remaining olive oil. Serve with lemon wedges, hot or at room temperature, garnished with parsley.</li></ol><p><br></p><p><br></p>"
    )

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Physics").id,
   title: "Infinite Square Well",
    body: "In quantum mechanics, the particle in a box model (also known as the infinite potential well or the infinite square well) describes a particle free to move in a small space surrounded by impenetrable barriers. The model is mainly used as a hypothetical example to illustrate the differences between classical and quantum systems. In classical systems, for example, a ball trapped inside a large box, the particle can move at any speed within the box and it is no more likely to be found at one position than another. However, when the well becomes very narrow (on the scale of a few nanometers), quantum effects become important. The particle may only occupy certain positive energy levels. Likewise, it can never have zero energy, meaning that the particle can never \"sit still\". Additionally, it is more likely to be found at certain positions than at others, depending on its energy level. The particle may never be detected at certain positions, known as spatial nodes."
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Physics").id,
   title: "Classical Mechanics",
    body: "<h1><br><br>In Lagrangian mechanics, the trajectory of a system of particles is derived by solving the Lagrange equations in one of two forms, either the Lagrange equations of the first kind,[1] which treat constraints explicitly as extra equations, often using Lagrange multipliers;[2][3] or the Lagrange equations of the second kind, which incorporate the constraints directly by judicious choice of generalized coordinates.[1][4] In each case, a mathematical function called the Lagrangian is a function of the generalized coordinates, their time derivatives, and time, and contains the information about the dynamics of the system."
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Underwater Basketweaving 99").id,
   title: "Day 1: Why take this course?",
    body: "In weaving willow baskets, a trough of water is needed in which to soak the dried willow rods. They are then left to stand until pliable and ready to be used in weaving. The weaving is, however, not done under water.[4] An issue of The American Philatelist from 1956 refers to an Alaskan village where \"Underwater basket weaving is the principal industry of the employables among the 94 Eskimos here. By way of explanation – the native reeds used in this form of basketry are soaked in water and the weavers create their handiwork with their hands and raw materials completely submerged in water throughout the process of manufacture\"."
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Underwater Basketweaving 99").id,
   title: "Day 2: Underwater Basketweaving Origin",
    body: 'The phrase was used during the Vietnam War era to describe the sort of major that many young men who would otherwise not have entered college undertook to escape the draft.[16] US Senator Gordon L. Allott referred in 1968 to "the situation that we were in after World War II where we had universities setting up courses in underwater basket weaving, and all this sort of thing".[17] Senator Robert Byrd used the phrase in 1969 when questioning the use of funds to offer professional training to Cuban refugees. The University of Portsmouth, UK, has a joke syllabus for underwater basket weaving on the Technology faculty pages,[19] and another joke syllabus proposal was posted by a University of Central Arkansas student magazine.[20]
<br><br>
US Punk band NOFX referred to an underwater basket weaving course in their song "Anarchy Camp".[citation needed]
<br><br>
Linkedin adopted "skill endorsement" in 2012, and in response to the arbitrary nature of those skill attributions, some LinkedIn participants began to list "Advanced Underwater Basket Weaving" as a skill, thereby exercising some control over their online profile'
)

Note.create(author_id: User.find_by_username("demo").id,
notebook_id: Notebook.find_by_title("CS 101").id,
title: "Your first program!",
body: "print('Hello World!')"
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("CS 101").id,
   title: "Why Conditionals are Cool: Intro to Bleeding Edge Physics Engine Technology",
    body: "<p>In&nbsp;computer science,&nbsp;conditional statements,&nbsp;conditional expressions&nbsp;and&nbsp;conditional constructs&nbsp;are features of a&nbsp;programming language, which perform different computations or actions depending on whether a programmer-specified&nbsp;boolean&nbsp;condition&nbsp;evaluates to true or false.</p><p><br></p><pre class=\"ql-syntax\" spellcheck=\"false\">e.g.\nif(willCollide) {\n  dont;\n}\n</pre>"
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("CS 101").id,
   title: "Recursion",
    body: ""
)



Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Workout Routines").id,
   title: "Workout 1",
    body: "<p><br></p><ol><li>Incline Bench Press 3 15, 12, 10 </li><li>Dumbbel Bench Press 3 15, 12, 10 </li><li>Dumbbell Fly 3 15, 12, 10 </li><li>Dips 3 10 - 12 </li><li>Pull Downs 3 15, 12, 10 </li><li>Pullovers 3 10 - 12 </li><li>Bent Over Rows 3 15, 12, 10 </li><li>Rear Delt Lateral Raise 3 10 - 12 </li><li>Dumbbell Shrugs 2 12 - 15 </li><li>Hanging Leg Raises 3 15, 12, 10 </li><li>Ab Crunch 3 15, 12, 10 </li><li>Plank 2 60 seconds</li></ol>"
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Workout Routines").id,
   title: "Workout 2",
    body: "<ol><li>Squats 3 15, 12, 10 </li><li>Sissy Squats 3 10 - 12 </li><li>Leg Extensions 3 10 - 12 </li><li>Reverse Lunges 3 10 - 12 (per leg) </li><li>Stiff-Legged Deadlift 3 15, 12, 10 </li><li>Leg Curls 3 10 - 12 </li><li>Leg Press Calf Raise 3 15 </li><li>Standing Calf Raise 3 12 - 15 </li><li>Seated Calf Raise 3 12 - 15</li></ol>"
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Workout Routines").id,
   title: "Workout 3",
    body: "<ol><li>Shoulder Presses 3 15, 12, 10 </li><li>Upright Row 3 12 - 15 </li><li>Lateral Raises 3 12 - 15 </li><li>Bent Over Lateral Raise 3 10 - 12 </li><li>Close Grip Bench Press 3 15, 12, 10 </li><li>Overhead Extensions 3 10 - 12 </li><li>Rope Pushdown 3 10 - 12 </li><li>EZ Bar Curls 3 15, 12, 10 </li><li>Incline Curls 3 10 - 12 </li><li>Spider Curls 3 10 - 12 </li><li>Hammer Curls 3 10 - 12 </li><li>Wrist Curls 2 10 - 12 </li><li>Reverse Wrist Curls 2 10 - 12</li></ol>"
)

Note.create(author_id: User.find_by_username("demo").id,
 notebook_id: Notebook.find_by_title("Todos").id,
   title: "Grocery List",
    body: ""
)



Tag.create(name: "recipes", owner_id: User.find_by_username("demo").id)
Tag.create(name: "sirloin", owner_id: User.find_by_username("demo").id)
Tag.create(name: "custard", owner_id: User.find_by_username("demo").id)
Tag.create(name: "sugar", owner_id: User.find_by_username("demo").id)
Tag.create(name: "octopus", owner_id: User.find_by_username("demo").id)
Tag.create(name: "eight", owner_id: User.find_by_username("demo").id)
Tag.create(name: "courses", owner_id: User.find_by_username("demo").id)
Tag.create(name: "important", owner_id: User.find_by_username("demo").id)
Tag.create(name: "STEM", owner_id: User.find_by_username("demo").id)
Tag.create(name: "workout", owner_id: User.find_by_username("demo").id)
Tag.create(name: "health", owner_id: User.find_by_username("demo").id)
Tag.create(name: "daily", owner_id: User.find_by_username("demo").id)
Tag.create(name: "reminder", owner_id: User.find_by_username("demo").id)
Tag.create(name: "scheduled", owner_id: User.find_by_username("demo").id)
Tag.create(name: "equations", owner_id: User.find_by_username("demo").id)
Tag.create(name: "mathy", owner_id: User.find_by_username("demo").id)
Tag.create(name: "measurement", owner_id: User.find_by_username("demo").id)
Tag.create(name: "lazy", owner_id: User.find_by_username("demo").id)

# Tagging.create(owner_id: 1,tag_id: 1, note_id: 1)
# Tagging.create(owner_id: 1,tag_id: 1, note_id: 2)
# Tagging.create(owner_id: 1,tag_id: 1, note_id: 3)
# Tagging.create(owner_id: 1,tag_id: 1, note_id: 4)
# Tagging.create(owner_id: 1,tag_id: 2, note_id: 5)
# Tagging.create(owner_id: 1,tag_id: 2, note_id: 6)
# Tagging.create(owner_id: 1,tag_id: 2, note_id: 7)
# Tagging.create(owner_id: 1,tag_id: 2, note_id: 8)
# Tagging.create(owner_id: 1,tag_id: 3, note_id: 9)
# Tagging.create(owner_id: 1,tag_id: 3, note_id: 10)
# Tagging.create(owner_id: 1,tag_id: 3, note_id: 11)
# Tagging.create(owner_id: 1,tag_id: 3, note_id: 12)
# Tagging.create(owner_id: 1,tag_id: 4, note_id: 13)
# Tagging.create(owner_id: 1,tag_id: 4, note_id: 14)
# Tagging.create(owner_id: 1,tag_id: 4, note_id: 15)
# Tagging.create(owner_id: 1,tag_id: 4, note_id: 16)
