# findMyHome

Table of Contents
Overview
User Features
a. User Registration
b. View User Profile
c. Update User Profile
d. Login User
e. Delete User Profile
Installation
Usage
Contributing
License
Overview
This README provides guidance on setting up and using the backend for the application. The backend includes functionality related to user management, such as registration, profile viewing, updating, logging in, and profile deletion.

User Features
User Registration
URL: http://localhost:3001/user/register
HTTP Method: POST
Postman Keys:
name
email
password
cnfpassword
mobile
role (User, MessOwner, Landlord)
View User Profile
URL: http://localhost:3001/user/fetch
HTTP Method: GET
Postman Keys:
email
Update User Profile
URL: http://localhost:3001/user/update
HTTP Method: PATCH
Postman Keys:
condition_obj
content_obj
Login User
URL: http://localhost:3001/user/login
HTTP Method: POST
Postman Keys:
email
password
Delete User Profile
URL: http://localhost:3001/user/delete
HTTP Method: DELETE
Postman Keys:
email
password
