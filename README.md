# vending-machine-v2
A simple and interactive CRUD application that mimics the behavior of a vending machine. This application was built as a learning project and serves as an introduction to the PERN stack (PostgreSQL, Express.js, React.js, Node.js).


## Screenshots
![vending-machinev2](https://user-images.githubusercontent.com/51008990/218376919-dc7e0191-b0bb-4b7f-afe8-18a0fc701356.png)
![vending-machinev2-vendor](https://user-images.githubusercontent.com/51008990/218376989-5b0fa24b-88f5-4895-a686-01e215258d0b.png)

### Features
- Customer:
  - Make purchases by selecting an item and entering the total amount. The application will calculate the change for you.

- Vendor:
  - Add, delete and update items available in the machine.
  - Get a record of all customer transactions.
  - Add funds to the machine by setting the total fund.
  - Get the current items available in the machine.
  
  
### Tech Stack
- PostgreSQL
- Express.js
- React.js
- Node.js



### How to Use
1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in both client and server directories.
3. Set up the database by following the instructions in the server/src/db/database.sql file (Make sure to configure the db.js file).
4. Start the server by running npm start or npm run dev for development mode in both client and server directories.
5. Access the application by navigating to http://localhost:3000 in your browser.

The application is ready to use. You can switch between the customer and vendor interfaces to perform different actions. Enjoy!
