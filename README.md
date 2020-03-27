# kanban_server

**GET ALL TASKS**
----

  Returns json data from User tasks.

* **URL**

  /tasks

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  None

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **Success Response:**

  * **Code:** 200 <br/>Content:** `[{ title : "First task", category : "BACKLOG",  UserId:1 createdAt: 2020-03-06, updatedAt:2020-03-06 }]`

* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `Internal Server Error`

    OR

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`





**CREATE TASK**
----

  Adding a new task.

* **URL**

  /tasks/add

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  None

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

  

* **Data Params**

  title=[string]

  category=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ title : "First task", category : "BACKLOG",  UserId:1 createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `Internal Server Error`

    OR

  * **Code:** 400 <br/>

    **Content:** `Bad Request`

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`



**UPDATE TASK**
----

  Find and update task by "id".

* **URL**

  /tasks/:id

* **Method:**

  `PUT`

* **URL Params**

  **Required:**
   id=[integer]

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **Data Params**

  title=[string], category=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ title : "First task", category : "BACKLOG",  UserId:1 createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `Internal Server Error`

  * **Code:** 400 <br/>

    **Content:** `Bad Request`
  
    OR

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`




**DELETE TASK**
----

  delete task by id.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`

* **Headers**

  **Required:** `Access Token`

  `token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoaWxtaTFAbWFpbC5jb20iLCJpYXQiOjE1ODMyNDc1MTB9.xdpk6MGA5XcQjx1ggLpOovhOHnl7xojDj-gbrhIs3Dw`

* **URL Params**

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ title : "First task", category : "BACKLOG",  UserId:1 createdAt: 2020-03-06, updatedAt:2020-03-06 }`

* **Error Response:**

  * **Code:** 500 NOT FOUND <br />
    **Content:** `Internal Server Error`

    OR

  * **Code:** 400 <br/>

    **Content:** `Bad Request`
  
    OR

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`



# 

User
----

### **Register**

----

  Add a new user to database

* **URL**

  /users/register

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  None

* **Data Params**

  name=[string]

  email=[string]

  password=[string]

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id:1 email : "hilmi@mail.com" }`

* **Error Response:**

 * **Code:** 500 <br />
    **Content:** `Internal Server Error`

    OR

  * **Code:** 400 <br/>

    **Content:** `Bad Request`
  
    OR

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`




### **Login**

----

  Add a new user to database

* **URL**

  /users/login

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  None

* **Data Params**

  email=[string]

  password=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Access Token`

* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `Internal Server Error`

    OR

  * **Code:** 400 <br/>

    **Content:** `Bad Request`
  
    OR

  * **Code:** 403 <br/>
    
    **Content:** `Unauthorized`

    OR

  * **Code:** 403 <br/>

    **Content:** `Forbidden`

    OR
    
  * **Code:** 404 <br/>
    
    **Content:** `Task Not Found`