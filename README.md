# kanban_server

**Create User**
----
  Returns token data for newly created User.

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **Request Body**

   **Required:**
   <br />
    ` {"name" : "new user, 
    "email" : "user1@gmail.com",
	"password" : "user1password"
    }`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />`
    {
    "access_name": "new user",
    "access_avatarUrl": "https://ui-avatars.com/api/?name=new+user&background=0D8ABC&color=fff",
    "access_token": "xxxxxx"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** <br />`{ message : [validation errors] }`

    OR 

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`


**Login User**
----
  Returns token data for logged in User.

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **Request Body**

   **Required:**
   <br />
    ` {"email" : "user1@gmail.com",
	"password" : "user1password"
    }`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />`
    {
    "access_name": "new user",
    "access_avatarUrl": "https://ui-avatars.com/api/?name=new+user&background=0D8ABC&color=fff",
    "access_token": "xxxxxx"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** <br />`{ message : "Wrong Email / Password" }`

    OR 

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`

**Google Sign In**
----
  Returns token data for logged in User.

* **URL**

  /users/googleSignin

* **Method:**

  `POST`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />`
    {
    "access_name": "new user",
    "access_avatarUrl": "https://ui-avatars.com/api/?name=new+user&background=0D8ABC&color=fff",
    "access_token": "xxxxxx"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`


**Create Task**
----
  Returns json data of newly created task.

* **URL**

  /tasks

* **Method:**

  `POST`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
*  **Request Body**

   **Required:**
   <br />
    ` {"title" : "Create layout"
    }`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />`
    {
        "data": {
            "id": 1,
            "title": "Create layout",
            "category": "backlog",
            "UserId": 10,
            "updatedAt": "2020-03-13T13:39:36.674Z",
            "createdAt": "2020-03-13T13:39:36.674Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** <br />`{ message : [validation errors] }`

    OR 

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`


**Show Tasks**
----
  Returns json data for all Tasks created by User logged in.

* **URL**

  /tasks

* **Method:**

  `GET`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
        "data": [
            {
                "id": 1,
                "title": "Create layout",
                "category": "backlog",
                "UserId": 10,
                "createdAt": "2020-03-13T13:39:36.674Z",
                "updatedAt": "2020-03-13T13:39:36.674Z"
            },
            {
                "id": 2,
                "title": "Build HTML",
                "category": "backlog",
                "UserId": 10,
                "createdAt": "2020-03-13T13:42:57.617Z",
                "updatedAt": "2020-03-13T13:42:57.617Z"
            }
        ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`



**Show Task By ID**
----
  Returns json data about a single Task.

* **URL**

  /tasks/:id

* **Method:**

  `GET`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    {
        "data": {
            "id": 1,
            "title": "Create layout",
            "category": "backlog",
            "UserId": 10,
            "updatedAt": "2020-03-13T13:39:36.674Z",
            "createdAt": "2020-03-13T13:39:36.674Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ message : "Task not found" }`
  
  OR 

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`

**Show Task By Category**
----
  Returns Tasks filtered by category owned by logged in user.

* **URL**

  /tasks/:category

* **Method:**

  `GET`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
*  **URL Params**

   **Required:**
 
   `category=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "data": [
            {
                "id": 1,
                "title": "Build HTML",
                "category": "backlog",
                "UserId": 10,
                "createdAt": "2020-03-13T13:42:57.617Z",
                "updatedAt": "2020-03-13T13:42:57.617Z"
            }
        ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`


**Update Task**
----
  Update Task and returns json data for updated Task.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`

*  **Headers**

   **Required:**
 
   `token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None
  
*  **Request Body**

   **Required:**
   <br />
    ` {"title" : "Create layout",
    "category" : "todo"
    }`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />
    `{
        "data": [
            {
                "id": 1,
                "title": "Build HTML updated",
                "category": "backlog",
                "UserId": 10,
                "createdAt": "2020-03-13T13:39:36.674Z",
                "updatedAt": "2020-03-13T13:46:15.522Z"
            }
        ],
        "message": "updated"
    }`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** <br />`{ message : [validation errors] }`

    OR 

    * **Code:** 404 <br />
    **Content:** <br />`{ error : "Task not Found" }`

    OR 

    * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`


**Delete Task**
----
  Delete Task.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`

*  **Headers**

   **Required:**
 
   `token=[string]`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** <br />`{
    "message": "deleted"
    }`
 
* **Error Response:**

    * **Code:** 500 <br />
    **Content:** <br />`{ error : "Internal Server Error" }`