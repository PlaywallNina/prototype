# Populate an Admin user
Admin.destroy_all
Admin.create(email: 'admin@example.com', password: 'foobar', password_confirmation: 'foobar')

# Populate Questions and Answers
Answer.destroy_all
Question.destroy_all

question1 = Question.create(text: 'Wat is je lievelings Apple product?')
question1.answers.create(order: 1, picture: 'http://placehold.it/100x100', title: 'iMac')
question1.answers.create(order: 2, picture: 'http://placehold.it/100x100', title: 'AppleWatch')
question1.answers.create(order: 3, picture: 'http://placehold.it/100x100', title: 'iPhone')
question1.answers.create(order: 4, picture: 'http://placehold.it/100x100', title: 'MacBook')

question2 = Question.create(text: 'Het is 4 uur \'smiddags en je hebt zin in een snack. Welk van deze producten spreekt je het meeste aan?')
question2.answers.create(order: 1, picture: 'http://placehold.it/100x100', title: 'Dadelreep')
question2.answers.create(order: 2, picture: 'http://placehold.it/100x100', title: 'Doritos')
question2.answers.create(order: 3, picture: 'http://placehold.it/100x100', title: 'KitKat')
question2.answers.create(order: 4, picture: 'http://placehold.it/100x100', title: 'Kroket')

question3 = Question.create(text: 'Wat drink jij tijdens een avondje stappen?')
question3.answers.create(order: 1, picture: 'http://placehold.it/100x100', title: 'Bier')
question3.answers.create(order: 2, picture: 'http://placehold.it/100x100', title: 'Wijn')
question3.answers.create(order: 3, picture: 'http://placehold.it/100x100', title: 'Sterk')
question3.answers.create(order: 4, picture: 'http://placehold.it/100x100', title: 'Soda')

question4 = Question.create(text: 'Wat is je droomauto?')
question4.answers.create(order: 1, picture: 'http://placehold.it/100x100', title: 'BMW')
question4.answers.create(order: 2, picture: 'http://placehold.it/100x100', title: 'Old Timer')
question4.answers.create(order: 3, picture: 'http://placehold.it/100x100', title: 'Tesla')
question4.answers.create(order: 4, picture: 'http://placehold.it/100x100', title: 'Volvo')

question5 = Question.create(text: 'Voor welk van deze producten zou je veel (echt veel) geld over hebben?')
question5.answers.create(order: 1, picture: 'http://placehold.it/100x100', title: 'Rolex')
question5.answers.create(order: 2, picture: 'http://placehold.it/100x100', title: 'Smartphone')
question5.answers.create(order: 3, picture: 'http://placehold.it/100x100', title: 'Sneakers')
question5.answers.create(order: 4, picture: 'http://placehold.it/100x100', title: 'Zonnebril')
