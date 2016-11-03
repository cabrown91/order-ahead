# Order Ahead
Check out the app on <a href="http://order-ahead.herokuapp.com/">Heroku

##Concept
###Motivation For The App
What motivated me to build this app was a consistent issue I noticed while working at the corporate offices of companies such as Apple, eBay, and Gap. I noticed that, these companies, and many more, have in-house chefs that create lunch at several stations within the cafeteria. Additionally, there were cafeterias in other buildings which belonged to the company. However, there was no clear, consistent, or time-efficient way to know what the offerings were on any given day or week. Not only that, there was no way to order lunch without having to figure out how to work the cafeteria lunch time around meetings.

###The Solution: JumpStart
With JumpStart, a company employee can view the lunch menu for the day or week, see the prices, ingredients/description. The employee can also log in using Facebook, which is especially ideal for companies that use Facebook for Work. By logging in, the employee has the opportunity to order their lunch from their phone, check-out, and pick up their lunch from the cafeteria at their convenience.

###Wireframes
<img width="250" src="https://cloud.githubusercontent.com/assets/19937807/19981920/22ec986c-a1c1-11e6-9728-146a01d26309.png">

<img width="250" src="https://cloud.githubusercontent.com/assets/19937807/19981921/23036b78-a1c1-11e6-9260-9f7c74d5ff09.png">

The most major difference between my initial wireframes and the actual app is that I decided to go with a single-page app design (at least for now).

###User Stories
[https://trello.com/b/19PBzKNf/lunch-app](url)

Examples: <br>
1. As a user, I want to be able to add items to the menu <br>
2. As a user, I want to be able to update items on the menu <br>
3. As a user, I want to be able to delete items from the menu <br>
4. As a user, I want to be able to add an item from the menu to my cart


###ERD Diagram
![screen shot 2016-11-03 at 12 25 44 pm](https://cloud.githubusercontent.com/assets/19937807/19981818/b567be98-a1c0-11e6-8c76-cba2986d15a5.png)

##Technologies Used
1. Facebook Login
2. Angular.js & Javascript
3. Express.js
4. Node.js
5. MongoDB/Mongoose
6. Bootstrap 4
7. Heroku

##Features Included
1. Log in with Facebook
2. Search the menu for a specific item
3. Create a new menu item
4. Edit menu items
5. Delete menu items



##Challenges
The biggest challenge I faced building this app was getting the logic for the shopping cart built it. The concept is simple, but the implementation was more complicated than I anticipated. In hindsight, I would have worked on it a day or two sooner than some of the other features.

##Triumphs
I re-learned MEAN stack and built the app within a week. Implementing Angular successfully was a huge win and brought with it some extra features, such as the search functionality. Additionally, I chose to upgrade from Bootstrap 3 to Bootstrap 4, which brought a few of its own challenges, but all in all, it came out well.


##Future Development Ideas
Stripe.js (or some other payment technology)

##Instructions to Run Locally
1. Clone this repo using git by running ```git clone [repo link]``` in your terminal
2. Run ```npm install``` in your terminal to install all npm dependencies
3. Run ```bower install``` in your terminal to install all bower dependencies
4. Run ```mongod``` in your terminal to start the MongoDB database
5. Run ```node seed.js``` in your terminal to seed the database with the seed data
6. Run ```nodemon``` in your terminal to run the Node server
7. Navigate to Localhost:3000 to view the app locally
