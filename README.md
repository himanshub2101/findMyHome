# FindMyHome Setup Guide

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

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/findmyhome.git

2. Install dependencies:
   ```bash
   cd findmyhome
   npm install
