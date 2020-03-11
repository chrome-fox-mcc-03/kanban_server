# Kanban Server

Base url: <http://localhost:3000>

## **Register**

Return json access token after user register

-   **URL**

    /register

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `password=[string]`
      
      `email=[string]`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**
        ```json
        {
          "id": 1,
          "email": "test@gmail.com"
        }
        ```

-   **Error Response:**

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
          {
            "status": 400,
            "errors": [
              "Email cannot be empty",
              "Email format is invalid",
              "Password cannot be emtpy",
              "Password should containt at least 6 characters"
            ],
            "message": "Bad Request"
          }
        ```

     -  **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "email must be unique"
            ],
            "message": "Bad Request"
        }
        ```

## **Login**

Returns json access token data when user login

-   **URL**

    /login

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

      **Required:**

      `email=[string]`\
      `password=[string]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIn0sImlhdCI6MTU4MzgzMDA5MywiZXhwIjoxNTgzODQ4MDkzfQ.gmATDawamHo4QK5TrYniEX6GiI_etbzMMNfGfCLnhtI"
        }
        ```

-   **Error Response:**

     -  **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**
        ```json
        {
            "status": 500,
            "errors": [
                "Illegal arguments: undefined, string"
            ],
            "message": "Error"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Email / password is incorrect"
            ],
            "message": "LoginFailed"
        }
        ```

## **Google Login**

Returns json access token when user login or register by google.

- **Headers**

    token: `<token>`

-   **URL**

    /users/gLogin

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJoYW5zaW5zdXNhdHlhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiSGFuc2luIFN1c2F0eWEiLCJpbml0aWFsIjoiSFMiLCJpYXQiOjE1ODE2NzcwMTF9.Ol7Dw3zwqVTg3D_ZhPU-9iVuhd931L8MzOOQYPlF8zU"
        }
        ```
    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
            "status": 500,
            "errors": [
                "The verifyIdToken method requires an ID Token"
            ],
            "message": "Error"
        }
        ```

    -   **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**

        ```json
        {
            "status": 500,
            "errors": [
                "Can't parse token envelope: yJhbGciOiJSUzI1NiIsImtpZCI6Ijc2MmZhNjM3YWY5NTM1OTBkYjhiYjhhNjM2YmYxMWQ0MzYwYWJjOTgiLCJ0eXAiOiJKV1QifQ': Unexpected token Ș in JSON at position 0"
            ],
            "message": "SyntaxError"
        }
        ```

## **Create Category**

Returns category data in JSON format when a new category added

-   **URL**

    /category

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `name=[string]`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**
        ```json
        {
            "id": 8,
            "name": "Done",
            "UserId": 1
        }
        ```

-   **Error Response:**

     -  **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Name cannot be null"
            ],
            "message": "Bad Request"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Category name cannot be emtpy"
            ],
            "message": "Bad Request"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }
        ```

## **Find All Category**

Returns array of object in JSON format

-   **URL**

    /category

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `None`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            {
                "id": 10,
                "name": "Backlog",
                "createdAt": "2020-03-10T11:13:57.287Z",
                "updatedAt": "2020-03-10T11:13:57.287Z",
                "UserId": 1,
                "Tasks": [
                        {
                            "id": 1,
                            "title": "test"
                        }
                    ]
            }
        ]
        ```

-   **Error Response:**


    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }
        ```

## **Delete Category**

Returns message in JSON format

-   **URL**

    /category/:id

-   **Method:**

    `DELETE`

-   **URL Params**

    id:  ``[integer]``

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `None`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "message": "Category deleted"
        }
        ```

-   **Error Response:**

     -  **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Category not found"
            ],
            "message": "Not Found"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }

        ```
        -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to do this action"
            ],
            "message": "Unautorized"
        }
        ```
## **Update Category**

Returns updated category data in JSON format

-   **URL**

    /category/:id

-   **Method:**

    `PUT`

-   **URL Params**

    id:  ``[integer]``

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `None`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "id": 10,
            "name": "abc",
            "UserId": 1,
            "createdAt": "2020-03-10T11:13:57.287Z",
            "updatedAt": "2020-03-10T12:29:05.015Z"
        }
        ```

-   **Error Response:**

     -  **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Category not found"
            ],
            "message": "Not Found"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }

        ```
        -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to do this action"
            ],
            "message": "Unautorized"
        }
        ```

## **Create Task**

Returns task data in JSON format when a new task added

-   **URL**

    /task

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `title=[string]`
      `CategoryId=[integer]`

-   **Success Response:**

    -   **Code:** 201 <br />
        **Content:**
        ```json
        {
            "id": 4,
            "title": "Tes",
            "CategoryId": 10,
            "UserId": 1,
            "updatedAt": "2020-03-10T14:31:46.336Z",
            "createdAt": "2020-03-10T14:31:46.336Z"
        }
        ```

-   **Error Response:**

     -  **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "Task title cannot be emtpy"
            ],
            "message": "Bad Request"
        }
        ```

    -   **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        {
            "status": 400,
            "errors": [
                "CategoryId should be filled"
            ],
            "message": "Bad Request"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }
        ```

## **Find All Task**

Returns array of object in JSON format

-   **URL**

    /task

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `CategoriId = [integer]`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        [
            {
                "id": 4,
                "title": "Tes",
                "createdAt": "2020-03-10T14:31:46.336Z",
                "updatedAt": "2020-03-10T14:31:46.336Z",
                "CategoryId": 10,
                "UserId": 1
            },
            {
                "id": 3,
                "title": "Berhasil update",
                "createdAt": "2020-03-10T14:27:42.136Z",
                "updatedAt": "2020-03-10T14:46:13.925Z",
                "CategoryId": 10,
                "UserId": 1
            }
        ]
        ```

-   **Error Response:**

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }
        ```

## **Delete Category**

Returns message in JSON format

-   **URL**

    /category/:id

-   **Method:**

    `DELETE`

-   **URL Params**

    id:  ``[integer]``

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `None`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "message": "Category deleted"
        }
        ```

-   **Error Response:**

     -  **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Category not found"
            ],
            "message": "Not Found"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }

        ```
        -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to do this action"
            ],
            "message": "Unautorized"
        }
        ```
## **Update Category**

Returns updated category data in JSON format

-   **URL**

    /category/:id

-   **Method:**

    `PUT`

-   **URL Params**

    id:  ``[integer]``

-   **Headers**

    Authorization: ``<access_token>``

-   **Data Params**

      **Required:**

      `None`

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:**
        ```json
        {
            "id": 10,
            "name": "abc",
            "UserId": 1,
            "createdAt": "2020-03-10T11:13:57.287Z",
            "updatedAt": "2020-03-10T12:29:05.015Z"
        }
        ```

-   **Error Response:**

     -  **Code:** 404 NOT FOUND <br />
        **Content:**
        ```json
        {
            "status": 404,
            "errors": [
                "Category not found"
            ],
            "message": "Not Found"
        }
        ```

    -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "Please Login First"
            ],
            "message": "Authentication failed"
        }

        ```
        -   **Code:** 401 UNAUTHORIZED <br />
        **Content:**
        ```json
        {
            "status": 401,
            "errors": [
                "You are not authorized to do this action"
            ],
            "message": "Unautorized"
        }
        ```