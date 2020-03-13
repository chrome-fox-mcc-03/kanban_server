# kanban_server

**Register**
----
  Create account

* **URL**

  /register

* **Method:**

  `POST`
  
*  **Body**

   **Required:**
 
   `email=[string]`<br />
   `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token : token }`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ message : "error" }`

**Login**
----
  Login

* **URL**

  /login

* **Method:**

  `POST`
  
*  **Body**

   **Required:**
 
   `email=[string]`<br />
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token : token }`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ message : "error" }`

**Google Login**
----
  Google Login

* **URL**

  /loginGoogle

* **Method:**

  `POST`
  
*  **Headers**

   **Required:**
 
   `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token : token }`

  OR

  * **Code:** 201 <br />
    **Content:** `{ token : token }`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ message : "error" }`


**Add Task**
----
  Add task

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **Headers**

   **Required:**
 
   `token=[string]`

*  **Body**

   **Required:**
 
   `title=[string]` <br />
   `description=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ data : {...} }`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ message : "error" }`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : "error" }`

**Get Tasks**
----
  Get task list

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **Headers**

   **Required:**
 
   `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : [{...}, {...}] }`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : "error" }`


**Update Tasks**
----
  Update task

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **Headers**

   **Required:**
 
   `token=[string]`

*  **Body**

   **Required:**
 
   `category=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : {...} }`
 
* **Error Response:**

  * **Code:** 400  Bad Request <br />
    **Content:** `{ message : "error" }`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : "error" }`

**Delete Tasks**
----
  Delete task

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **Headers**

   **Required:**
 
   `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ data : {...} }`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ message : "error" }`