**Show All Category**
----
  Returns json data about all Categorys.

* **URL**

  /board

* **Method:**

  `GET`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": [
          {
              "id": 1,
              "title": "BackLog",
              "UserId": 1,
              "createdAt": "2020-02-14T06:43:37.632Z",
              "updatedAt": "2020-02-14T06:43:37.632Z"
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`
---
**Create Task**
----
  Create task.

* **URL**

  /:pId

* **Method:**

  `POST`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success create data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Update One Task**
----
  Update one task based on id.

* **URL**

  /:id

* **Method:**

  `PATCH`
  
* **Headers**

  Authorization: `<token>`

*  **URL Params**

    **Required**

    id=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success update data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Delete One Task**
----
  Delete one task based on id.

* **URL**

  /:id

* **Method:**

  `DELETE`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    **Required**

    id=[integer]

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "message": "Success delete data
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Create Project**
----
  Create Project.

* **URL**

  /addproject

* **Method:**

  `POST`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success create data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Show All Project**
----
  Returns json data about all Project.

* **URL**

  /project

* **Method:**

  `GET`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": [
          {
              "id": 1,
              "name": "testing",
              "createdAt": "2020-02-14T06:43:37.632Z",
              "updatedAt": "2020-02-14T06:43:37.632Z"
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Show All Joined Member**
----
  Returns json data about all Joined Member.

* **URL**

  /joinedmember/:ProjectId

* **Method:**

  `GET`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": [
          {
              "id": 1,
              "name": "fajar"
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Show All Member**
----
  Returns json data about all Member.

* **URL**

  /member

* **Method:**

  `GET`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "data": [
          {
              "id": 1,
              "name": "fajar"
          }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Join Project**
----
  Join Project.

* **URL**

  /member

* **Method:**

  `POST`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    UserId,
    ProjectId

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success create data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Remove From Project**
----
  Remove From Project.

* **URL**

  /member

* **Method:**

  `DELETE`

* **Headers**

  Authorization: `<token>`
  
*  **URL Params**

    None

* **Data Params**

    UserId,
    ProjectId

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success Delete Data"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "You must Login first" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Register User**
----
  Register a user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbIsInR5cCI6IkpXVCJ9.eyJpZCI6NCxNTgxNjc0NjE4fQ.wMFSchDraMBYqAEri6Tchl_0x2St831OGus"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Login User**
----
  Login a user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbGciOinR5cCI6IkpXVCJ9.eyJpZCI6NCwigxNjc0NjE4fQ.wMFSchDraMBAEri6Tchl_0x2St831OGus"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---
**Google Sign In**
----
  Login a user using google sign in.

* **URL**

  /google

* **Method:**

  `POST`
  
*  **URL Params**

    **Required**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWFgwODI2MTk1fQ.h56et9F8IbLIG6e5wvGtRC6oRDvpxHf8WO4rWs" 
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Not Found <br />
    **Content:** `{ message : "Email/Password Invalid" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---



