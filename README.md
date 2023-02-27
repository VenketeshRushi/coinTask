# task summery
Developer - Assignment 
 
Business Requirements
Create a simple 2-page website using Node.js and SQL database.

Synopsis

Create a simple 2-Page website using Node.js and SQL database, Page 1 will have three buttons namely Fetch Users, Delete Users, User Details, on clicking the Fetch Users button the application should fetch data from the (https://randomuser.me/) api and store it in a table of any name in the database, the data fetch should be in bulk for e.g., if the api returns a single record then the application should be such a way that it will fetch around 50 or 100 records on a single click. 

On clicking on the Delete Users button the application should remove all the entries in the database. On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.
 
 
 
Page 1: Home Page

 
Use-Case ID 1

User-Case Name
Home Page
Use-Case Description
Page will have three buttons namely Fetch Users, Delete Users, User Details,
 
1. On clicking the Fetch Users button the application should fetch data in bulk around 50 – 100 records from the (https://randomuser.me/) api and store it in a table    of any name in the database

2. The Delete Users button the application should remove all the entries in the database.
 
3. On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.
 
Inputs
Buttons

1. Fetch Users
2. Delete Users
3. User Details


Validations
 
1. The Fetch Users button click should throw an error alert if already some data fetch is going on.
 
2. The Delete Users button click should throw an error alert before deleting all the records.
 
3. The Users Details button click should take the user to Page 2.
 
 
Page 2: User Detail Page
 
 
Use-Case ID 2

User-Case Name
User Detail Page
Use-Case Description
Page will have a table view with 10 records with necessary column, Pagination and Filter feature
Inputs

1. Pagination button
2. Filter Button
 
Validations
 
1. Pagination should allow the user to go to the next page, previous page or any page number.
 
2. Filter should work based on the filter criteria.
 
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application UI</title>
</head>
<body>
 <h1>Home Page</h1>
  <img src="https://i.imgur.com/9C0zZ0P.png"  alt="homepage" />
 <br />
  <h1>User Detail Page</h1>
  <img src="https://i.imgur.com/AQSfbGP.png"  alt="userdetailspage" />
 <br />
  <h1>Dark Mode UI</h1>
  <h2>Home Page</h2>
  <img src="https://i.imgur.com/qOyzKN4.png"  alt="homepage" />
 <br />
  <h2>User Detail Page</h2>
  <img src="https://i.imgur.com/Ey0UNvv.png"  alt="userdetailspage" />
</body>
</html>

# coinTask
