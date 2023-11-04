# BACKEND TATTOO STUDIO

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#database-diagram">Database diagram</a></li>
    <li><a href="#local-installation">Local installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#future-features">Future features</a></li>
    <li><a href="#errors">Errors</a></li>
    <li><a href="#developer">Developer</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the project
This project consists of a backend for a tattoo studio using Express and TypeScript, working with a MySQL database.

## Stack
Technologies used:
<div align="center">
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://www.typescriptlang.org/">
    <img src= "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</a>
  <a href="https://git-scm.com/">
    <img width="10%" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"/>
</a>
  <a href="https://www.postman.com/">
    <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" width="60"/>
</a>
</div>


## Database diagram
![tattoo studio reverse engineer](https://github.com/VALDITOR/Tattoo-Studio/assets/139993876/ccb3f732-b042-4b00-ae2f-b2119fec11dd)

## Local installation
1. Clone the repository
2. ` $ npm install `
3. We connect our repository with the database
4. ``` $ We execute the migrations ``` 
5. ``` $ We execute the seeders ``` 
6. ``` $ npm run dev ``` 
7. ...

## Endpoints
<details>
<summary>Endpoints</summary>

- CUSTOMERS
    - REGISTER

            POST http://localhost:5050/customer/register
        body:
        ``` json
            {
                "name": "Alex",
                "surname": "Valdi"
                "email": "alex@gmail.com",
                "password": "Alex!"
            }
        ```

    - LOGIN

            POST http://localhost:5050/customer/login 
        body:
        ``` json
            {
                "email": "alex@gmail.com",
                "password": "Alex!"
            }
        ```

    - PROFILE (Requires Auth: user)

            GET http://localhost:5050/customer/profile

    -UPDATE (Requires Auth: user)

            PUT http://localhost:5050/customer/update 
   body:
  ``` json
               {
                  "name": "Alejandro",
                  "surname": "Valdivielso"
                  "email": "alejandro@gmail.com",
                  "password": "Alejandro!"
              }
   ```

- GET APPOINTMENT (Requires Auth)

            GET http://localhost:5050/customer/appointment/:id
        
- TATTOO ARTIST
    - LOGIN

            POST http://localhost:5050/tattoo_artist/login 
        body:
        ``` json
            {
                "email": "alex@gmail.com",
                "password": "Alex!"
            }
        ```

    - PROFILE (Requires Auth: admin)

            GET http://localhost:5050/tattoo_artist/profile

    -UPDATE (Requires Auth: admin)

            PUT http://localhost:5050/tattoo_artist/update 
   body:
  ``` json
               {
                  "name": "Alejandro",
                  "surname": "Valdivielso"
                  "email": "alejandro@gmail.com",
                  "password": "Alejandro!"
              }
   ```

- GET APPOINTMENT (Requires Auth: admin)

            GET http://localhost:5050/customer/appointment/:id
  
- GET ALL TATTOO ARTIST (Requires Auth: user)

            GET http://localhost:5050/tattoo_artist/all

- SUPER ADMIN
    - REGISTER (Requires Auth: super admin)

            POST http://localhost:5050/tattoo_artist/register
        body:
        ``` json
            {
                "name": "Alex",
                "surname": "Valdi"
                "email": "alex@gmail.com",
                "password": "Alex!"
            }
        ```

    - GET ALL CUSTOMERS (Requires Auth: super admin)

            GET http://localhost:5050/tattoo_artist/customers

    -UPDATE ROLE & ACTIVATION OF TATTOO ARTIST (Requires Auth: super admin)

            PUT http://localhost:5050/tattoo_artist/update_admin 
   body:
  ``` json
               {
                  "id": 1,
                  "role": "admin"
                  "is_active": true
              }
   ```

-UPDATE ACCOUNT ACTIVATION OF CUSTOMER (Requires Auth: super admin)

            PUT http://localhost:5050/tattoo_artist/update_admin_customer 
   body:
  ``` json
               {
                  "id": 1,
                  "is_active": true
              }
   ```

- APPOINTMENT
    - CREATE (Requires Auth: user)

            POST http://localhost:5050/appointments/create
        body:
        ``` json
            {
                "customer_id": "1",
                "tattoo_artist_id": "1",
                "date": "2023-12-12 15:00:00"
            }
        ```

     - UPDATE (Requires Auth: user)

            PUT http://localhost:5050/appointments/update/:id
        body:
        ``` json
            {
                "tattoo_artist_id": "1",
                "status": "0",
                "date": "2023-12-12 15:00:00"
            }
        ```

- DELETE (Requires Auth: user)

            DELETE http://localhost:5050/appointments/delete
  body:
   ``` json
            {
                "id": "1"
            }
    ```

- GALLETY
    - CREATE (Requires Auth: admin)

            POST http://localhost:5050/gallery/create
        body:
        ``` json
            {
                "tattoo_artist_id": "1",
                "image": "url"
            }
        ```

     - UPDATE (Requires Auth: admin)

            PUT http://localhost:5050/gallery/update/:id
        body:
        ``` json
            {
                "image": "url"
            }
        ```
        
- GET ALL IMAGES (Requires Auth: user)

            GET http://localhost:5050/gallery/all

- DELETE (Requires Auth: admin)

            DELETE http://localhost:5050/gallery/delete
  body:
   ``` json
            {
                "id": "1"
            }
    ```
</details>

## Future features
[ ] Get images from the gallery by tattoo artist id 
[ ] Add a check to ensure that a field cannot be left empty
[ ] Add an appointment confirmation system 

## Errors
[ ] A tattoo artist can create appointments for their colleagues
[ ] You can leave the fields for first name and last name empty

## Developer

``` js
 const developer = "valditor";

 console.log("Developed by Alex Valdivielso a.k.a: " + developer);
```  

## Acknowledgments

I would like to thank my classmates and instructors from the Geekshub FSD Bootcamp for their collaboration in helping me complete this project

## Contact
<a href="https://www.linkedin.com/in/alejandro-valdivielso-tortosa-9b2154273/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>
