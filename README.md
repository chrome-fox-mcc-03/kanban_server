# kanban_server

**Create Kanban**
----
  Create data in database, return object JSON 

* **URL**

  /task

* **Method:**
  
  POST
  
*  **URL Params**
    
    none

* **Headers**

  **Required:**
 
   `token=[string]`

* **Data Params**

   **Required:**
 
   `title=[string]`,
   `description=[string]`,

   **Optional:**


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{"id": 34, "title": "first task", "UserId": 1, "description": "hehehehehehehehehehe", "updatedAt": "2020-03-13T17:57:04.653Z", "createdAt": "2020-03-13T17:57:04.653Z", "category": "backlog"}`
 
* **Error Response:**

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Title Invalid" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Server Error" }`


**Show All Task**
----
  Show all task, return array of object

* **URL**

  /task

* **Method:**
  
  GET
  
*  **URL Params**

    none

* **Headers**

  **Required:**
 
   `token=[string]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"id": 34, "title": "first task", "UserId": 1, "description": "hehehehehehehehehehe", "updatedAt": "2020-03-13T17:57:04.653Z", "createdAt": "2020-03-13T17:57:04.653Z", "category": "backlog"}]`
 
* **Error Response:**

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`


**Show Task by Id**
----
  Show task with id, return object JSON

* **URL**

  /task/:id

* **Method:**
  
  GET
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Headers**

  **Required:**
 
   `token=[string]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "NOT FOUND" }`


**Update Task by Id**
----
  Update task by id, return object JSON

* **URL**

  /task/:id

* **Method:**
  
  PATCH
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Headers**

  **Required:**
 
   `token=[string]`

* **Data Params**

   **Required:**
 
   `title=[string]`,
   `description=[string]`,

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `success`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "NOT FOUND" }`

  OR

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Title Invalid" }`

  OR

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`



**Delete Task by Id**
----
  Delete task by id, return object JSON

* **URL**

  /task/:id

* **Method:**
  
  DELETE
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Headers**

  **Required:**
 
   `token=[string]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id: 1, title: Play Game, description: play game online, status: false, due_date: 2020-03-10, createdAt: 2020-03-02T08:55:40.696Z, updatedAt: 2020-03-02T08:55:40.696Z }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Task not found" }`

  OR

  * **Code:** 500 SERVER <br />
    **Content:** `{ error : "Server Error" }`

**Login**
----
  Login, return object JSON 

* **URL**

  /signIn

* **Method:**
  
  POST
  
*  **URL Params**
    
    none

* **Data Params**

   **Required:**
 
   `email=[string]`,
   `password=[string]`,

   **Optional:**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 1, "email": "xavier@gmail.com" "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6MSwiZW1haWwiOiJ4YXZpZXJAZ21haWwuY29tIiwiaWF0IjoxNTg0MTIzMDA5fQNf-Cr1KjSFvcT7Afx6JUw6dxyGeDZRvkbAZVhXehcbI"}`
 
* **Error Response:**

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email or Password Wrong" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Server Error" }`

**Register**
----
  Register, return object JSON 

* **URL**

  /signUp

* **Method:**
  
  POST
  
*  **URL Params**
    
    none

* **Data Params**

   **Required:**
 
   `email=[string]`,
   `password=[string]`,

   **Optional:**


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{"id": 1, "email": "xavier@gmail.com" "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6MSwiZW1haWwiOiJ4YXZpZXJAZ21haWwuY29tIiwiaWF0IjoxNTg0MTIzMDA5fQNf-Cr1KjSFvcT7Afx6JUw6dxyGeDZRvkbAZVhXehcbI"}`
 
* **Error Response:**

  * **Code:** 400 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email already been used, try anothen email" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Server Error" }`
