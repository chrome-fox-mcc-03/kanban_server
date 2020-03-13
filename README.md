# kanban_server Adam Primarizki

------
**Status Codes**
----
| Code        | Meaning           |
| ------------- |:-------------:|
| 200 | Data received      |   
| 201 | Data created/updated      |
||
| 400     | Bad request: <br> - Data type input is not correct <br> - Name cannot be empty <br> - Date must be in the future      |   
| 401      | Not authorized      | 
| 404      | Parameter(s) is not found on the database      | 
| 500     | Server internal error/malfunction |
   
**SIGN UP**
----
  Adds a new user to database

* **URL**

  /signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `name=[string]`<br />
  `username=[string]`<br />
  `email=[string]`<br />
  `password=[string]`<br />

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
    "name": "Adam Primarizki",
    "username": "prmzk323",
    "id": 43
    }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "ERROR 400 Bad Request: Username already exists." }`

------
**SIGN IN**
----
  Check username and password, send back a JWT if all condition fulfilled.

* **URL**

  /signin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  `username=[string]`<br />
     OR
  `email=[string]`<br />
  `password=[string]`<br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    JWT
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "ERROR 400 Bad Request: Username/Email false" }`

------
**GOOGLE SIGN IN**
----
  Sign in using OAuth 2 log in if found on database

* **URL**

  /oauth

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    JWT
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />


----
**GOOGLE SIGN UP**
----
  Sign up using google oauth and email

* **URL**

  /oauthSignUp

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

     `name=[string]`<br />
  `username=[string]`<br />
  `password=[string]`<br />


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    JWT
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
   OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "ERROR 400 Bad Request: Please fill your name." }`

----
**GET KANBAN BOARD**
----
  Returns array of board that created by the user.

* **URL**

  /board

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

   * **Headers**
    `TOKEN`

* **Data Params**

     `id=[int]`<br />


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "boards": [
            {
        "id": 2,
        "title": "Project Alpha",
        "background_id": "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "creator_id": 2,
        "createdAt": "2020-03-13T14:20:44.962Z",
        "updatedAt": "2020-03-13T14:20:44.962Z"
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

----
**CREATE KANBAN BOARD**
----
  Create a kanban board data

* **URL**

  /board

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

   * **Headers**
    `TOKEN`

* **Data Params**

     `id=[int]`<br />
     `title=[string]`<br />
     `background=[string]`<br />
     `memberId=[Array of integer] (optional)`<br />


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
            {
        "newBoard": {
            "id": 4,
            "title": "Project Delta",
            "background_id": "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "creator_id": 2,
            "updatedAt": "2020-03-13T14:24:05.518Z",
            "createdAt": "2020-03-13T14:24:05.518Z"
        },
        "msg": "Board created"
        }
    ```
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

* **Code:** 400 Bad Request <br />
    **Content:** `{ error : "ERROR 400 Bad Request: Please fill the title." }`

----
**DELETE KANBAN BOARD**
----
  Create a kanban board data

* **URL**

  /board/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
     `id=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**




* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
         {
        "msg": "Board deleted"
        }
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 400 Bad Request <br />
        **Content:** `{ error : "ERROR 400 Bad Request: Id not found." }`
    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`

----
**GET SHARED KANBAN BOARD**
----
  Get all kanban board that shared with the user

* **URL**

  /board/shared

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

   * **Headers**
    `TOKEN`

* **Data Params**

     `id=[int]`<br />



* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "boards": [
            {
        "id": 2,
        "title": "Project Alpha",
        "background_id": "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "creator_id": 2,
        "createdAt": "2020-03-13T14:20:44.962Z",
        "updatedAt": "2020-03-13T14:20:44.962Z"
            }
        ]
    }
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

----
**GET TASKS**
----
  Returns array of tasks that created on the board

* **URL**

  /task/:boardId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
     `boardId=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**

     `id=[int]`<br />


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    "tasks": [
    {
      "id": 71,
      "title": "Card Alpha",
      "description": "No description.",
      "due_date": "2020-08-08T00:00:00.000Z",
      "creator_id": 23,
      "board_id": 37,
      "color": "red",
      "category": "backlog",
      "createdAt": "2020-03-13T14:50:13.776Z",
      "updatedAt": "2020-03-13T14:50:13.776Z",
      "User": {
        "id": 23,
        "name": "Adam Primarizki",
        "email": "adam.primarizki@gmail.com",
        "username": "adamprmzk",
        "password": "$2a$10$sjWYql9rnW.GNmQL0OFZ.Ow1UovZ.P33CIQ8/68Vuet0angxS8.Pu",
        "createdAt": "2020-03-13T09:35:42.665Z",
        "updatedAt": "2020-03-13T09:35:42.665Z"
      }
    }
  ]
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`




----
**CREATE TASKS**
----
  Create a task on a board

* **URL**

  /task/:boardId

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
     `boardId=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**

     `title=[string]`<br />
     `color=[string]`<br />
     `description=[string]`<br />
     `due_date=[date]`<br />


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
      {
        "data": {
            "title": "Card Alpha",
            "due_date": "2020-08-08",
            "creator_id": 23,
            "board_id": "37",
            "color": "red",
            "category": "backlog"
        }
}
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 400 Bad Request <br />
        **Content:** `{ error : "ERROR 400 Bad Request: Please fill the title." }`

    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`

----
**GET TASKS**
----
  Delete a task

* **URL**

  /task/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
     `id=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**



* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "msg": "Task deleted."
     }   
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`


----
**UPDATE TASKS**
----
    Update a task's parameters
* **URL**

  /task/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
     `id=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**

     `title=[string]`<br />
     `description=[string]`<br />
     `due_date=[date]`<br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        {
        "msg": "Task edited"
        }  
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`

    * **Code:** 400 Bad Request <br />
        **Content:** `{ error : "ERROR 400 Bad Request: Id not found." }`

----
**UPDATE TASKS CATEGORY**
----
    Update a task's category
* **URL**

  /task/status/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
     `id=[int]`<br />

   * **Headers**
    `TOKEN`

* **Data Params**

     `category=[string]`<br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        {
        "msg": "Task edited"
        }  
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />

    * **Code:** 401 Unauthorized <br />
        **Content:** `{ error : "ERROR 401 Bad Request: you are not authorized" }`

