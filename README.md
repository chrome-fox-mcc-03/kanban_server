# kanban_server

A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). Kanban boards use cards, columns, and continuous improvement to help technology and service teams commit to the right amount of work, and get it done! This is my take on a kanban board made for Hacktiv8 Phase-2 portofolio.

## **Register a new User**

Registering a new user for our app.

- **URL**

  /register

- **Method:**

  `POST`

- **Data Params**

  **Required:**

  `email=[string], must be a valid email and unique`

  `password=[string], must at least contain 3 characters`

  `username=[string], must not be an empty string`

- **Success Response:**

  - **Code:** 201 Created <br />
    **Content:**
    ```javascript
    {
      "status": 201,
      "data": {
          "id": 5,
          "email": "thetfourthemail@gmail.com",
          "username": "TheGreatFourth"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Email has already been used"
        ]
    }
    ```

  OR

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Email must be filled",
            "Password must be filled",
            "Username must be filled"
        ]
    }
    ```

## **Login a User**

Logging in an existing user into our app. Will generate a token on succession.

- **URL**

  /login

- **Method:**

  `POST`

- **Data Params**

  **Required:**

  `email=[string]`

  `password=[string]`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmYWRoaWxhaG1ldHJhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZmFkaGlsYWhtIiwiaWF0IjoxNTg0MDE4MzM4fQ.MLr0RnyHQvRnvSEs6WywGiasHFdL7PMjQ4LGvdor2d4"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": "Email / Password was incorrect"
    }
    ```

  OR

  - **Code:** 500 Internal Server Error <br />
    **Content:**
    ```javascript
    {
        "status": 500,
        "msg": "Internal Server Error"
    }
    ```

## **Login through Google OAuth (backend not finished)**

Registering a user through Google OAuth service or logging in a user if the google email already existed in our database.

- **URL**

  /gsignin

- **Method:**

  `POST`

- **Success Response:**

  - **Code:** 201 Created <br />
    **Content:**
    `javascript { "status": 201, "data": { "id": 3, "email": "thethirdemail@gmail.com", "username": "TheGreatThird" } }`

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Email has already been used"
        ]
    }
    ```

  OR

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Email must be filled",
            "Password must be filled",
            "Username must be filled"
        ]
    }
    ```

## **Get all Tasks**

Returning all the tasks we currently had in our database.

- **URL**

  /tasks

- **Method:**

  `GET`

- **Headers Params**

  **Required:**

  `token=[string], received after successful login`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
        "data": [
            {
                "id": 3,
                "title": "Create login3",
                "description": "Read online documentation",
                "UserId": 1,
                "CategoryId": 1,
                "createdAt": "2020-03-12T06:56:04.442Z",
                "updatedAt": "2020-03-12T08:25:02.845Z",
                "Category": {
                    "id": 1,
                    "name": "Backlog",
                    "createdAt": "2020-03-12T06:42:59.219Z",
                    "updatedAt": "2020-03-12T06:42:59.219Z"
                }
            },
            {
                "id": 2,
                "title": "Create login",
                "description": "Read online documentation",
                "UserId": 1,
                "CategoryId": 4,
                "createdAt": "2020-03-12T06:55:36.141Z",
                "updatedAt": "2020-03-12T08:16:02.421Z",
                "Category": {
                    "id": 4,
                    "name": "Done",
                    "createdAt": "2020-03-12T06:42:59.219Z",
                    "updatedAt": "2020-03-12T06:42:59.219Z"
                }
            },
            {
                "id": 4,
                "title": "Create login4",
                "description": "Read online documentation",
                "UserId": 1,
                "CategoryId": 4,
                "createdAt": "2020-03-12T06:56:09.424Z",
                "updatedAt": "2020-03-12T06:56:09.424Z",
                "Category": {
                    "id": 4,
                    "name": "Done",
                    "createdAt": "2020-03-12T06:42:59.219Z",
                    "updatedAt": "2020-03-12T06:42:59.219Z"
                }
            }
        ],
        "msg": "Successfully fetched all data"
    }
    ```

- **Error Response:**

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

## **Create a new Task**

Creating a new Task and saving it in our database.

- **URL**

  /tasks

- **Method:**

  `POST`

- **Headers Params**

  **Required:**

  `token=[string], received after successful login`

- **Data Params**

  **Required:**

  `title=[string], cannot be an empty string`

  `description=[string], cannot be an empty string`

  `CategoryId=[String]`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
      "data": {
          "id": 5,
          "title": "Learn Vue.js",
          "description": "Vue.js is really popular",
          "CategoryId": 1,
          "UserId": 1,
          "updatedAt": "2020-03-12T13:19:00.588Z",
          "createdAt": "2020-03-12T13:19:00.588Z"
      },
      "msg": "Successfully created a new task"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Title must be filled",
            "Description must be filled"
        ]
    }
    ```

  OR

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

## **Edit a Task**

Editing an existing Task.

- **URL**

  /tasks/:id

- **Method:**

  `PUT`

- **Headers Params**

  **Required:**

  `token=[string], received after successful login`

- **URL Params**

  **Required:**

  `id=[integer], id of the edited task`

- **Data Params**

  **Optional**

  `title=[string], must not be an empty string`

  `description=[string], must not be an empty string`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
      "data": [
          1,
          [
              {
                  "id": 5,
                  "title": "Learn JQuery.js",
                  "description": "JQuery is the next-level DOM-manipulation tool",
                  "UserId": 1,
                  "CategoryId": 1,
                  "createdAt": "2020-03-12T13:19:00.588Z",
                  "updatedAt": "2020-03-12T13:25:32.799Z"
              }
          ]
      ],
      "msg": "Successfully updated a task"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": [
            "Title cannot be empty",
            "Description cannot be empty"
        ]
    }
    ```

  OR

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

## **Delete a Task**

Delete a Task from our app.

- **URL**

  /tasks/:id

- **Method:**

  `DELETE`

- **Headers Params**

  **Required:**

  `token=[string], received after successful login`

- **URL Params**

  **Required:**

  `id=[integer], id of the task that wanted to be deleted`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
        "msg": "Successfully deleted a Task"
    }
    ```

- **Error Response:**

  - **Code:** 404 Not Found <br />
    **Content:**
    ```javascript
    {
        "status": 404,
        "msg": "Error not found"
    }
    ```

  OR

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

## **Next a Task**

Move a Task one step to the right (plus one in the CategoryId). It cannot move if it has already reached the final column.

- **URL**

  /tasks/:id/next

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `id=[integer], id of the task that wanted to be moved`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
        "msg": "Task successfully moved into category 2"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": "Task already reached the end"
    }
    ```

  OR

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

  OR

  - **Code:** 404 Not Found <br />
    **Content:**
    ```javascript
    {
        "status": 404,
        "msg": "Error not found"
    }
    ```

## **Back a Task**

Move a Task one step to the left (minus one in the CategoryId). It cannot move if it has already reached the final column or it currently located in the first column.

- **URL**

  /tasks/:id/back

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `id=[integer], id of the task that wanted to be moved`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```javascript
    {
        "msg": "Task successfully moved into category 2"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "msg": "Task successfully moved into category 1"
    }
    ```

  OR

  - **Code:** 400 Bad Request <br />
    **Content:**
    ```javascript
    {
        "status": 400,
        "msg": "Task cannot be moved from when it is already in Done category"
    }
    ```

  OR

  - **Code:** 401 Unauthorized <br />
    **Content:**
    ```javascript
    {
        "status": 401,
        "msg": "Unauthorized, you need to log in first"
    }
    ```

  OR

  - **Code:** 404 Not Found <br />
    **Content:**
    ```javascript
    {
        "status": 404,
        "msg": "Error not found"
    }
    ```
