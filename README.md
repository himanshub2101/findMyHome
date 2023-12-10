# FindMyHome Setup Guide
<!---------------------------------------------------------------------- User  ------------------------------------------------------------------------------>
## User Features

### a) User Registration

- **URL:** http://localhost:3001/user/register
- **HTTP Method:** POST
- **Postman Keys:**
  - name
  - email
  - password
  - cnfpassword
  - mobile
  - role (User, MessOwner, Landlord)

### b) View User Profile

- **URL:** http://localhost:3001/user/fetch
- **HTTP Method:** GET
- **Postman Keys:**
  - email

### c) Update User Profile

- **URL:** http://localhost:3001/user/update
- **HTTP Method:** PATCH
- **Postman Keys:**
  - condition_obj
  - content_obj

### d) Login User

- **URL:** http://localhost:3001/user/login
- **HTTP Method:** POST
- **Postman Keys:**
  - email
  - password

### e) Delete User Profile

- **URL:** http://localhost:3001/user/delete
- **HTTP Method:** DELETE
- **Postman Keys:**
  - email
  - password
<!---------------------------------------------------------------------- Mess Owner  ------------------------------------------------------------------------------>
## Mess Owner Features

### a) Add Mess Facility

- **URL:** http://localhost:3001/mess/add
- **HTTP Method:** POST
- **Postman Keys:**
  - messname
  - pincode
  - address
  - service
  - foodtype (Veg, Non Veg, Jain)
  - iconname
  - email
  - token
  - mobile
  - description
  - price

### b) Fetch Mess Facility

- **URL:** http://localhost:3001/mess/fetch
- **HTTP Method:** GET
- **Postman Keys:**
  - token
  - pincode
  - foodtype (optional)

### c) Update Mess Facility

- **URL:** http://localhost:3001/mess/update
- **HTTP Method:** PATCH
- **Postman Keys:**
  - condition_obj
  - content_obj

### d) Delete Mess Pic

- **URL:** http://localhost:3001/mess/delete
- **HTTP Method:** DELETE
- **Postman Keys:**
  - messname

### e) Delete Mess Facility

- **URL:** http://localhost:3001/mess/delete
- **HTTP Method:** DELETE
- **Postman Keys:**
  - messname
  - token
  - pincode
  - email
  - _id
  - password
 <!---------------------------------------------------------------------- House Owner  ------------------------------------------------------------------------------>
## House Owner Features

### a) Add House Facility

- **URL:** http://localhost:3001/house/add
- **HTTP Method:** POST
- **Postman Keys:**
  - housename
  - pincode
  - address
  - service
  - housetype (Hostel, PG, Flat)
  - iconname
  - email
  - token
  - mobile
  - description
  - price

### b) Fetch House Facility

- **URL:** http://localhost:3001/house/fetch
- **HTTP Method:** GET
- **Postman Keys:**
  - token
  - pincode
  - housetype (optional)

### c) Update House Facility

- **URL:** http://localhost:3001/house/update
- **HTTP Method:** PATCH
- **Postman Keys:**
  - condition_obj
  - content_obj

### d) Delete House Pic

- **URL:** http://localhost:3001/house/delete
- **HTTP Method:** DELETE
- **Postman Keys:**
  - housename

### e) Delete House Facility

- **URL:** http://localhost:3001/house/delete
- **HTTP Method:** DELETE
- **Postman Keys:**
  - housename
  - token
  - pincode
  - email
  - _id
  - password

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/findmyhome.git

2. Install dependencies:
   ```bash
   cd findmyhome
   npm install

3. Run the Application:
   ```bash
   npm run dev app.js
