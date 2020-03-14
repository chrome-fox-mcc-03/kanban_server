# Kanbanium

**https://kanbanium-6e230.firebaseapp.com/**

**Sign Up**
----
  Finds a user with inputted email, if no email exists in the database, it creates new user and returns a token. Else, error message will be returned.

* **URL**

  /signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `name=[string], email=[string], password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoidGhlb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM2MjM2ODV9.zsQg5gJaerrEgPQOTOkVql1fW_OU7O6NNjPAzuS-WW8'}`
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** `{ message : "Your email has already registered" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Sign In**
----
  Finds a user that matches the inputted email then (if the email matched) compares password and (if the password matched) returns a token.

* **URL**

  /signin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `email=[string], password=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoidGhlb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM2MjM2ODV9.zsQg5gJaerrEgPQOTOkVql1fW_OU7O6NNjPAzuS-WW8'}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ message : "Invalid email/password" }`

  OR

   * **Code:** 500 <br />

* **Sample Call:**

  none

**Add Activity**
----
  Adds new todo and returns the added activity.

* **URL**

  /activities

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `title=[string], category=[string], UserId=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{"id": 29, "title": "New task 5", "UserId": 3,"updatedAt": "2020-03-12T17:53:31.366Z", "createdAt": "2020-03-12T17:53:31.366Z", "category": "Backlog"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Fetch Actitivies**
----
  Returns an array of object json data about all activities.

* **URL**

  /activities

* **Method:**

  `GET`
  
*  **Headers**

   **Required: Access Token**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ { "id": 23, "title": "Visit Bogor", "category": "Needs Review", "UserId": 3, "createdAt": "2020-03-12T17:43:19.436Z", "updatedAt": "2020-03-13T09:43:59.517Z" }, { "id": 24, "title": "January report", "category": "On Progress", "UserId": 3, "createdAt": "2020-03-12T17:38:16.440Z", "updatedAt": "2020-03-13T10:04:03.916Z" } ]`
 
* **Error Response:**

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Delete Activity**
----
  Deletes an activity and returns json data about the deleted activity.

* **URL**

  /activities

* **Method:**

  `DELETE`
  
*  **Headers**

   **Required: Access Token**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 23, "title": "Visit Bogor", "category": "Needs Review", "UserId": 3, "createdAt": "2020-03-12T17:43:19.436Z", "updatedAt": "2020-03-13T09:43:59.517Z" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Sorry, we do not find the activity you're looking for" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Get Activity by ID**
----
  Returns json data about a single activity.

* **URL**

  /activities

* **Method:**

  `GET`
  
*  **Headers**

   **Required: Access Token**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 23, "title": "Visit Bogor", "category": "Needs Review", "UserId": 3, "createdAt": "2020-03-12T17:43:19.436Z", "updatedAt": "2020-03-13T09:43:59.517Z" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Sorry, we do not find the activity you're looking for" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Move Activity**
----
  Updates the category of an activity and returns json data about the updated activity.

* **URL**

  /activities

* **Method:**

  `PATCH`
  
*  **Headers**

   **Required: Access Token**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 23, "title": "Visit Bogor", "category": "Needs Review", "UserId": 3, "createdAt": "2020-03-12T17:43:19.436Z", "updatedAt": "2020-03-13T09:43:59.517Z" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Sorry, we do not find the activity you're looking for" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  none

**Update Title**
----
  Updates the title of an activity and returns json data about the updated activity.

* **URL**

  /activities/title

* **Method:**

  `PATCH`

*  **Headers**

   **Required: Access Token**
 
   `token=[string]`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "id": 23, "title": "Visit Bogor", "category": "Needs Review", "UserId": 3, "createdAt": "2020-03-12T17:43:19.436Z", "updatedAt": "2020-03-13T09:43:59.517Z" }`
 
* **Error Response:**

  * **Code:** 500 <br />

* **Sample Call:**

  none