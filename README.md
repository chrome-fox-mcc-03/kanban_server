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

