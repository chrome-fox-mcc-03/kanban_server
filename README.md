https://kanban-1584096845473.firebaseapp.com/
# kanban_server
**Create Todo**
----

* **URL**

  /todos

* **Method:**

  `POST`

*  **URL Params**

    NONE

* **Data Params**

    `name_box:[string]` <br />
    `description:[string]` <br />
    `UserId:[integer]` <br />

* **Data Headers**

    `token:[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "result": {
            "name_box":"Backlog",
            "description":"add new feature"
        }
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Read Todos By UserId**
----

* **URL**

  /todos/:id

* **Method:**

  `GET`

*  **URL Params**

    `id:[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
            "id": 1,
            "name_box": "Backlog",
            "description": "add feature login",
            "UserId": 4,
            "createdAt": "2020-03-11T14:02:44.346Z",
            "updatedAt": "2020-03-11T14:02:44.346Z",
            "Labels": []
        },
        {
            "id": 2,
            "name_box": "Backlog",
            "description": "add feature register",
            "UserId": 4,
            "createdAt": "2020-03-11T14:02:44.346Z",
            "updatedAt": "2020-03-11T14:02:44.346Z",
            "Labels": [
                {
                    "id": 6,
                    "name": "back-end",
                    "color": "red",
                    "TodoId": 2,
                    "createdAt": "2020-03-11T14:02:44.360Z",
                    "updatedAt": "2020-03-11T14:02:44.360Z"
                }
            ]
        }
    ]

 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Update Todo**
----

* **URL**

  /todos/:id

* **Method:**

  `PUT`

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Data Params**

    `description:[string]` <br />

* **Data Headers**

    `token:[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [1]`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```
    {
        "message": ["description min 2 characters"]
    }`
# 
**Delete Todo**
----

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Data Params**

  None

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    1
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```
    { "message" : 'Error Data Not Found' }
----

**Create Label**
----

* **URL**

  /label:id

* **Method:**

  `POST`

*  **URL Params**

    `id:[integer]`

* **Data Params**

    `name:[string]` <br />
    `color:[string]` <br />

* **Data Headers**

    `token:[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "result": {
            "name":"back-end",
            "color":"red"
        }
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Delete Label**
----

* **URL**

  /label/:id

* **Method:**

  `DELETE`

* **Data Params**

  None

*  **URL Params**

    **Required:**

    `id:[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    1
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```
    { "message" : 'Error Data Not Found' }

# 
**Register**
------
* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

    `email:[string]` <br />
    `password:[string]` <br />

*  **URL Params**

    NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ0ZXN0aW5nMzAwQG1haWwuY29tIiwiaWF0IjoxNTg0MTE1OTYxfQ.nx6XYNjS46gdxIGOlpmIGychAve5OCpd0dBMU7QHtYw",
        "email": "testing300@mail.com",
        "id": 8
    }
 
* **Error Response:**

  * **Code:** 400 Bad Request  <br />
    **Content:** 
    ```
    {
        "status": 400,
        "message": [
            "password min 6 characters",
            "email has already been used"
        ]
    }

# 
**Login**
------
* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

    `email:[string]` <br />
    `password:[string]` <br />

*  **URL Params**

    NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ0ZXN0aW5nMzAwQG1haWwuY29tIiwiaWF0IjoxNTg0MTE1OTYxfQ.nx6XYNjS46gdxIGOlpmIGychAve5OCpd0dBMU7QHtYw",
        "email": "testing300@mail.com",
        "id": 8
    }
 
* **Error Response:**

  * **Code:** 400 Bad Request  <br />
    **Content:** 
    ```
    {
        "status": 400,
        "message": [
            'Email/password wrong'
        ]
    }

# 
**Login with Google**
------
* **URL**

  /loginGoogle

* **Method:**

  `POST`

* **Data Params**

    `id_token:[string]` <br />
    `password:[string]` <br />

*  **URL Params**

    NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ0ZXN0aW5nMzAwQG1haWwuY29tIiwiaWF0IjoxNTg0MTE1OTYxfQ.nx6XYNjS46gdxIGOlpmIGychAve5OCpd0dBMU7QHtYw",
        "id": 8
    }
 
* **Error Response:**

  * **Code:** 400 Bad Request  <br />
    **Content:** 
    ```
    {
        "status": 400,
        "message": [
            'login failed'
        ]
    }
----