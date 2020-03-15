# KANBAN
-----------

**Create Task**
----
  Create new task.

* **URL**

  /tasks/

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Body/Form Params**<br>
  **Required**
  - `title` : string
  - `category` : string (backlog, requested, wip, done)
  - `due_date` : date (YYYY-MM-DD)

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**<br>
     `{
      "id": 6,
      "title": "halal bihalal",
      "category": "pending",
      "due_date": "2020-05-27T00:00:00.000Z",
      "updatedAt": "2020-03-02T10:10:40.754Z",    
      "createdAt": "2020-03-02T10:10:40.754Z",
      "UserId": 3
    }`
<br><br>

 
* **Error Responses:**
  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** <br>
    `{
    "message": [
        "Due date must be today or later"
    ]
    }`
    <br>
    **OR**
    `{
    "message": [
        "Title must be filled"
    ]
    }`


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <br>
    `RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: undefined
    at ServerResponse.writeHead (_http_server.js:248:11)
    at ServerResponse._implicitHeader (_http_server.js:239:8)
    at write_ (_http_outgoing.js:650:9)
    at ServerResponse.end (_http_outgoing.js:760:5)
    at ServerResponse.send (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:221:10)
    at ServerResponse.json (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:267:15)
    at errorHandler (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/errorHandling.js:47:30)
    at Layer.handle_error (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:315:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at authenticate (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/authenticate.js:37:10)
    at Layer.handle [as handle_request] (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:317:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)`
<br>
<hr>
<br>

**Read Tasks**
----
  Returns a list of all tasks owned by the logging in user

* **URL**

  /tasks/

* **Method:**

  `GET`
  
*  **URL Params**
    None

* **Data Params**<br>
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    <br>
    `{
    "data": [
        {
            "id": 3,
            "title": "beli baju",
            "category": "pending",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z",
            "UserId": 3
        },
        {
            "id": 5,
            "title": "bikin kue",
            "category": "wip",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z",
            "UserId": 3
        },
        {
            "id": 7,
            "title": "cuci sprei",
            "category": "done",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z",
            "UserId": 3
        }
    ],
    "message": "Here are the complete list"
}`
 
* **Error Responses:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    <br>
    `RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: undefined
    at ServerResponse.writeHead (_http_server.js:248:11)
    at ServerResponse._implicitHeader (_http_server.js:239:8)
    at write_ (_http_outgoing.js:650:9)
    at ServerResponse.end (_http_outgoing.js:760:5)
    at ServerResponse.send (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:221:10)
    at ServerResponse.json (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:267:15)
    at errorHandler (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/errorHandling.js:47:30)
    at Layer.handle_error (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:315:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at authenticate (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/authenticate.js:37:10)
    at Layer.handle [as handle_request] (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:317:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)`

<br>
<hr>
<br>

**Read Todo By Id**
----
  Returns a task activity based on ID

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**
    `:id [integer]`

* **Data Params**<br>
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br>
    `{
    "data": [
        {
            "id": 3,
            "title": "beli baju",
            "category": "pending",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z",
            "UserId": 3,
            "User": {
                "id": 27,
                "email": "maxwell.hamzah@gmail.com"
            }
        }
    ],
    "message": "Entry found",
    "decoded": {
        "id": 27,
        "email": "maxwell.hamzah@gmail.com",
        "iat": 1583508900
    }
  }`
 
* **Error Responses:**
  * **Code:** 400 UNAUTHORIZED ACCESS <br />
    **Content:** <br>
    `{
    "message": "UNAUTHORIZED ACCESS"
    }`

  <br><br>

  * **Code:** 404 ENTRY NOT FOUND <br />
    **Content:** <br>
    `{
    "message": "ENTRY NOT FOUND"
    }`

<br>
<hr>
<br>

**Update Todo**
----
  Update task entry by Id.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**
    `:id [integer]`

* **Body/Form Params**<br>
  **Required**
  - `title` : string
  - `category` : string (backlog, requested, wip, done)
  - `due_date` : date (YYYY-MM-DD)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br>
    `{
    "data": [
        {
            "id": 3,
            "title": "beli baju",
            "category": "pending",
            "due_date": "2020-05-31T00:00:00.000Z",
            "createdAt": "2020-03-02T08:01:15.475Z",
            "updatedAt": "2020-03-02T08:01:15.475Z",
            "UserId": 3
        }
    ],
    "message": "Entry updated"
}`
 
* **Error Responses:**

  * **Code:** 400 UNAUTHORIZED ACCESS <br />
    **Content:** <br>
    `{
    "message": "UNAUTHORIZED ACCESS"
    }`

  <br>

  * **Code:** 404 ENTRY NOT FOUND <br />
    **Content:** <br>
    `{
    "message": "ENTRY NOT FOUND"
    }`

  <br>

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <BR>
    `RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: undefined
    at ServerResponse.writeHead (_http_server.js:248:11)
    at ServerResponse._implicitHeader (_http_server.js:239:8)
    at write_ (_http_outgoing.js:650:9)
    at ServerResponse.end (_http_outgoing.js:760:5)
    at ServerResponse.send (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:221:10)
    at ServerResponse.json (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:267:15)
    at errorHandler (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/errorHandling.js:47:30)
    at Layer.handle_error (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:315:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at authenticate (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/authenticate.js:37:10)
    at Layer.handle [as handle_request] (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:317:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)`
<br>
<hr>
<br>

**Delete Task**
----
  Delete task entry by Id.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
    `:id [integer]`

* **Data Params**<br>
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": 1,
    "message": "Delete success for ID 3"
}`
 
* **Error Responses:**

  * **Code:** 400 UNAUTHORIZED ACCESS <br />
    **Content:** <br>
    `{
    "message": "UNAUTHORIZED ACCESS"
    }`

  <br>

  * **Code:** 404 ENTRY NOT FOUND <br />
    **Content:** <br>
    `{
    "message": "ENTRY NOT FOUND"
    }`

  <br>

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** <BR>
    `RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: undefined
    at ServerResponse.writeHead (_http_server.js:248:11)
    at ServerResponse._implicitHeader (_http_server.js:239:8)
    at write_ (_http_outgoing.js:650:9)
    at ServerResponse.end (_http_outgoing.js:760:5)
    at ServerResponse.send (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:221:10)
    at ServerResponse.json (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/response.js:267:15)
    at errorHandler (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/errorHandling.js:47:30)
    at Layer.handle_error (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:315:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:635:15
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:260:14)
    at authenticate (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/middlewares/authenticate.js:37:10)
    at Layer.handle [as handle_request] (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:317:13)
    at /home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:335:12)
    at next (/home/sandboxadmin/PROJECTS/HACKTIV8/PHASE2/todo-server/node_modules/express/lib/router/index.js:275:10)`
<br>
<hr>
<br>

<br>
<br>
<HR>
<HR>

**USER**
-----

**Signup**
----
  Registers new user

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**<br>
  `{ "email" : "john_doe@sample.com", "password" : "johndoe1" }`<br>
  **Required**
  - `email` : string
  - `password` : string


* **Success Response:**

  * **Code:** 201 <br />
    **Content:**<br>
    `{
    "datum": {
        "id": 9,
        "email": "jose_mourinho@liverpoolfc.uk",
        "password": "$2a$10$7zt.ibh3cp2eBD7pN9AjCuQ5rwmiyQMv7PVFNxq9uS/Qbag3TUHa2",
        "updatedAt": "2020-03-03T11:29:45.084Z",
        "createdAt": "2020-03-03T11:29:45.084Z"
    },
    "message": "Signup Success. Please Signin to Continue"
  }`
     

* **Error Responses:**

  * **Code:** 400 SEQUELIZE VALIDATION ERROR<br />
    **Content:**<br>
    `{
    "message": [
        "email must be unique"
    ]
    }`
    <br>
    **OR**
    `{
    "message": [
        "Please enter valid email format e.g. 'john_doe@domain.com'"
    ]
    }`
    <br>
    **OR**
    `{
    "message": [
        "Passwords must be between 8-16 characters long"
    ]
    }`

<br>
<hr>
<br>

**Login**
----
  Login user

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**<br>
`{ "email" : "john_doe@sample.com", "password" : "johndoe1" }`<br>
  **Required**
  - `email` : string
  - `password` : string


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
    `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJjcmlzdGlhbm9fcm9uYWxkb0BsaXZlcnBvb2xmYy51ayIsImlhdCI6MTU4MzIzNzgwOH0.eUjWk-QOFVss77WLfbbqFvt9rKuLNCNk4xEzCSiAdYk"
}`
     

* **Error Responses:**

  * **Code:** 400 WRONG EMAIL/PASSWORD<br />
    **Content:**<br>
    `{
    "message": "WRONG EMAIL/PASSWORD"
    }`
  <br>

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:**<br>
    `Cannot POST /users/signin1`

<br>
<hr>
<br>

**Google Signin**
----
  Login user using Google OAuth

* **URL**

  /users/googleSignin

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**<br>
  **Required**
  - GMail Username
  - GMail Passord


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
    `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJjcmlzdGlhbm9fcm9uYWxkb0BsaXZlcnBvb2xmYy51ayIsImlhdCI6MTU4MzIzNzgwOH0.eUjWk-QOFVss77WLfbbqFvt9rKuLNCNk4xEzCSiAdYk"
    }`
     
<br>
<hr>

  
