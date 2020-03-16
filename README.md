**LOGIN**
----
  Returns user token.

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
* **Data Params**

   `email=[string], password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ wrong username/password }`

**REGISTER**
----
  Returns user token.

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
* **Data Params**

   `name=[string], email=[string], password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ wrong username/password }`

**Google Login**
----
  Returns user token.

* **URL**

  /users/googleLogin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
* **Data Params**

   `email=[string], password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGExQG1haWwuY29tIiwiaWQiOjEyLCJpYXQiOjE1ODMzMTE2MDZ9.t5qKOtXlnrfYQjovHZKRNkN8OtFWOARf2Mfoh18iXW0
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ wrong username/password }`

**CREATE**
----
  Returns `you have been successfully added result title to to do`.

* **URL**

  /task

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
* **Headers Params**
  `token=[string]`
* **Data Params**

   `title=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `you have been successfully added ${result.title} to to do`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `title cannot be empty`


**SHOW**
----
  Returns Task data.

* **URL**

  /task

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 * **Headers Params**
  `token=[string]`
* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** {
        "id": 7,
        "title": "asdasdsad",
        "category": "to_review",
        "UserId": 1,
        "createdAt": "2020-03-13T03:21:31.901Z",
        "updatedAt": "2020-03-13T07:16:51.128Z"
    },
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `invalid signature`

**DELETE**
----
  Delete Task data.

* **URL**

  /task/:id

* **Method:**

  `DELETE`
  
* **Headers Params**
  `token=[string]`

*  **URL Params**

  `id=[integer]`

   **Required:**
 
* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `task has been successfully deleted`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `task with selected id can't be found`


**NEXT CATEGORY**
----
  Patch Task's category.

* **URL**

  /task/next_category/:id

* **Method:**

  `PATCH`
  
* **Headers Params**
  `token=[string]`

*  **URL Params**

  `id=[integer]`

   **Required:**
 
* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `you have been successfully moved ${result[1][0].title} to table 'process`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `task with selected id can't be found`

**BACK CATEGORY**
----
  Patch Task's category.

* **URL**

  /task/back/:id

* **Method:**

  `PATCH`

* **Headers Params**
  `token=[string]`  
  
*  **URL Params**

  `id=[integer]`

   **Required:**
 
* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `you have been successfully moved ${result[1][0].title} to table 'process`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `task with selected id can't be found`
