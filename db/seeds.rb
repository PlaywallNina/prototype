# Populate an Admin user
Admin.destroy_all
Admin.create(email: 'admin@example.com', password: 'foobar', password_confirmation: 'foobar')

# Populate Questions and Answers
Answer.destroy_all
Question.destroy_all

question1 = Question.create(text: 'Wat is je lievelings Apple product?')
question1.answers.create(order: 1, picture: 'Q2-android.jpg', title: 'Android')
question1.answers.create(order: 2, picture: 'Q2-Applewatch.jpg', title: 'AppleWatch')
question1.answers.create(order: 3, picture: 'Q2-IPHONE.jpg', title: 'iPhone')
question1.answers.create(order: 4, picture: 'Q2-macbook.jpg', title: 'MacBook')

question2 = Question.create(text: 'Het is 4 uur \'smiddags en je hebt zin in een snack. Welk van deze producten spreekt je het meeste aan?')
question2.answers.create(order: 1, picture: 'Q1-DADELREEP.jpg', title: 'Dadelreep')
question2.answers.create(order: 2, picture: 'http://placehold.it/100x100?text=Doritos', title: 'Doritos')
question2.answers.create(order: 3, picture: 'Q1-KITKAT.jpg', title: 'KitKat')
question2.answers.create(order: 4, picture: 'Q1-KROKET.jpg', title: 'Kroket')

question3 = Question.create(text: 'Wat drink jij tijdens een avondje stappen?')
question3.answers.create(order: 1, picture: 'Q3-bier.jpg', title: 'Bier')
question3.answers.create(order: 2, picture: 'Q3-Wijn.jpg', title: 'Wijn')
question3.answers.create(order: 3, picture: 'Q3-sterk.jpg', title: 'Sterk')
question3.answers.create(order: 4, picture: 'Q3-soda.jpg', title: 'Soda')

question4 = Question.create(text: 'Wat is je droomauto?')
question4.answers.create(order: 1, picture: 'Q4-bmw.jpg', title: 'BMW')
question4.answers.create(order: 2, picture: 'Q4-Oldtimer.jpg', title: 'Old Timer')
question4.answers.create(order: 3, picture: 'Q4-teslag.jpg', title: 'Tesla')
question4.answers.create(order: 4, picture: 'Q4-volvo1.jpg', title: 'Volvo')

question5 = Question.create(text: 'Voor welk van deze producten zou je veel (echt veel) geld over hebben?')
question5.answers.create(order: 1, picture: 'Q5-rolex.jpg', title: 'Rolex')
question5.answers.create(order: 2, picture: 'Q5-Smartphone.jpg', title: 'Smartphone')
question5.answers.create(order: 3, picture: 'Q5-sneaker.jpg', title: 'Sneakers')
question5.answers.create(order: 4, picture: 'Q5-zonnebril.jpg', title: 'Zonnebril')
