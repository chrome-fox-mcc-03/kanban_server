# kanban_server

# USER

**Register User**
----
  Create new user and Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    name : required string,
    email: required string,
    password: required string
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: 1,
      name: "Ipul",
      email: "ipul@gmail.com"
      updatedAt: "2020-03-02T09:49:06.087Z",
      createdAt: "2020-03-02T09:49:06.087Z"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'name is required',
        'email is required',
        'format email is wrong',
        'Email must be unique',
        'password is required',
        'Minimal 8 character'
      ]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```


****

**Login User**
----
  login user and Returns json data about a accessToken.

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    email: string,
    password: string
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFwcmlsIiwiZW1haWwiOiJhcHJpbEBnbWFpbC5jb20iLCJpYXQiOjE1ODMxNDQwNTh9.UpLvSulZRmT-CD-xaw8Zk-WvqVsLxC8g-_SEVdUAl4A"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : ['Invalid email/password]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

****


**Create Task**
----
  Create task and Returns json data about a single Task.

* **URL**

  /:teamId/tasks

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    title : string,
    description: string,
    CategoryId: integer,
    TeamId: integer
  }
  ```

*  **URL Params**

   **Required:**
 
   [teamId:integer]

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
      {
        "id": 2,
        "title": "Postgres SQL",
        "description": "postico",
        "CategoryId": null,
        "TeamId": 1,
        "updatedAt": "2020-03-13T16:35:55.167Z",
        "createdAt": "2020-03-13T16:35:55.167Z"
      }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'title is required',
        'category is required is required',
      ]
    }
    ```
  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHORIZED<br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHORIZED',
      errors : ['You are not authorized to view this page.']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

**Find All Todo**
----
  Returns json data about all tasks.

* **URL**

  /:teamId/tasks

* **Method:**

  `GET`
  
* **Headers**

  **Required:**

  token

*  **URL Params**

   **Required:**
 
   [teamId:integer]

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
     [
        {
            "TeamId": 6,
            "UserId": 7,
            "createdAt": "2020-03-13T16:39:55.549Z",
            "updatedAt": "2020-03-13T16:39:55.549Z",
            "Team": {
                "id": 6,
                "name": "Chrome Fox",
                "createdAt": "2020-03-13T16:39:55.537Z",
                "updatedAt": "2020-03-13T16:39:55.537Z"
            }
        }
    ]
 
    ```
 
* **Error Response:**

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

***