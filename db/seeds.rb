# Populate an Admin user
Admin.destroy_all
Admin.create(email: 'admin@example.com', password: 'foobar', password_confirmation: 'foobar')

# Populate Questions and Answers
Answer.destroy_all
Question.destroy_all
GivenAnswer.destroy_all
Survey.destroy_all

question1 = Question.create(text: 'Wat is je lievelings Apple product?')

question1.answers.create(order: 1, picture: 'http://i.imgur.com/4w0i8pm.jpg', title: 'Android')
question1.answers.create(order: 2, picture: 'http://i.imgur.com/NXKH4ul.jpg', title: 'AppleWatch')
question1.answers.create(order: 3, picture: 'http://i.imgur.com/CQFJ6fg.jpg', title: 'iPhone')
question1.answers.create(order: 4, picture: 'http://i.imgur.com/w9h9eAI.jpg', title: 'MacBook')

question2 = Question.create(text: 'Het is 4 uur \'smiddags en je hebt zin in een snack. Welk van deze producten spreekt je het meeste aan?')
question2.answers.create(order: 1, picture: 'http://i.imgur.com/4pjQwcq.jpg', title: 'Dadelreep')
question2.answers.create(order: 2, picture: 'http://i.imgur.com/mfFxo4K.jpg', title: 'Doritos')
question2.answers.create(order: 3, picture: 'http://i.imgur.com/MenrEXQ.jpg', title: 'KitKat')
question2.answers.create(order: 4, picture: 'http://i.imgur.com/FBU7ecA.jpg', title: 'Kroket')

question3 = Question.create(text: 'Wat drink jij tijdens een avondje stappen?')
question3.answers.create(order: 1, picture: 'http://i.imgur.com/NUAgq34.jpg', title: 'Bier')
question3.answers.create(order: 2, picture: 'http://i.imgur.com/Op5uGvF.jpg', title: 'Wijn')
question3.answers.create(order: 3, picture: 'http://i.imgur.com/uLianVW.jpg', title: 'Sterk')
question3.answers.create(order: 4, picture: 'http://i.imgur.com/8oVdxk8.jpg', title: 'Soda')

question4 = Question.create(text: 'Wat is je droomauto?')
question4.answers.create(order: 1, picture: 'http://i.imgur.com/PX2IWtf.jpg', title: 'BMW')
question4.answers.create(order: 2, picture: 'http://i.imgur.com/HM1FPh8.jpg', title: 'Old Timer')
question4.answers.create(order: 3, picture: 'http://i.imgur.com/l3XGZX3.jpg', title: 'Tesla')
question4.answers.create(order: 4, picture: 'http://i.imgur.com/kG7L626.jpg', title: 'Volvo')

question5 = Question.create(text: 'Voor welk van deze producten zou je veel (echt veel) geld over hebben?')
question5.answers.create(order: 1, picture: 'http://i.imgur.com/sk9e1jI.jpg', title: 'Rolex')
question5.answers.create(order: 2, picture: 'http://i.imgur.com/A05ICNH.jpg', title: 'Smartphone')
question5.answers.create(order: 3, picture: 'http://i.imgur.com/yTighBZ.jpg', title: 'Sneakers')
question5.answers.create(order: 4, picture: 'http://i.imgur.com/gn9oxHp.jpg', title: 'Zonnebril')
