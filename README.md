# kanban_server
**Show User**
----
  Returns json data about a single user.

* **URL**

  ```
  /register
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   ```
    { 
       email: [string], 
       password: [string]
    }
   ```

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        id : 12, 
        name : "Michael Bloom" 
    }
    ```
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** 
    ```
    { errors : ['Email must be register', 'Email must be register', 'Invalid email format',  'Password must be register', 'Password must be register', 'Password length must between 5 and 12'] }`

  OR

  * **Code:** 400  <br />
    **Content:** 
    ```
    { error : "Internal Server Error" }`



**Login User**
----
  Returns json data about a single user.

* **URL**

  ```
  /login
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `NONE`

* **Data Params**

  ```
    { 
       email: [string], 
       password: [string]
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        access_token: "awdqwgdiubxiuwbduwqdgqdg"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    { 
        error : "User Not Found"
    }` 
    
    OR


    { 
        error : "email /password wrong"
    }`

  OR

  * **Code:** 500  <br />
    **Content:** 
    ```
    {
         error : "Internal Server Error" 
    }`





**Google Login User**
----
  Returns json data about a single user.

* **URL**

  ```
  /login
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `NONE`

* **Data Params**

  ```
    { 
       email: [string], 
       password: [string]
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        access_token: "awdqwgdiubxiuwbduwqdgqdg"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    { 
        error : "User Not Found"
    }
    ``` 
    
    OR

    ```
    { 
        error : "email /password wrong"
    }
    ````


**Find One User**
----
  Returns json data about a single user.

* **URL**

  ```
  /find
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `NONE`

* **Data Params**

  ```
    { 
       email: [string], 
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 2,
        "email": "mara@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    "message": "User Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    "message": "Internal Server Error"
    }
    ``` 

  

**Create Project**
----
  Returns json data about a single user.

* **URL**

  ```
  /projects
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `NONE`

* **Data Params**

  ```
    { 
       email: [string], 
    }
   ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
        "id": 2,
        "email": "mara@mail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    "message": "User Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    "message": "Internal Server Error"
    }
    ``` 


  

**Find All Project**
----
  Returns json data about a single user.

* **URL**

  ```
  /projects
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `NONE`
* **Data Params**

    ```
    headers: {
     access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
    {
        id: 12,
        name: "maymaymay",
        "createdAt": "2020-03-13T09:06:13.670Z",
        "updatedAt": "2020-03-13T09:06:13.670Z",
        "Users": [
            {
                id: 2,
            "name": null,
                "email": "mara@mail.com",
                "password": "$2a$10$Mf9NJy9LmUhd9bWl3OIqduSmHsItmyu5BLf27d8OMbFJWsFq22sE.",
                "createdAt": "2020-03-13T07:46:10.093Z",
                "updatedAt": "2020-03-13T07:46:10.093Z",
                "ProjectUser": {
                    id: 4,
                    "UserId": 2,
                    "ProjectId": 12,
                    "createdAt": "2020-03-13T09:06:13.750Z",
                    "updatedAt": "2020-03-13T09:06:13.750Z"
                }
            },
            {
                id: 4,
            "name": null,
                "email": "vera@mail.com",
                "password": "$2a$10$C6yj2afl6yk9khHAmsOcwOYsb1MMuKYLwbdkjHnks5cDVjVb00uKi",
                "createdAt": "2020-03-13T10:23:09.879Z",
                "updatedAt": "2020-03-13T10:23:09.879Z",
                "ProjectUser": {
                    id: 23,
                    "UserId": 4,
                    "ProjectId": 12,
                    "createdAt": "2020-03-13T12:40:23.472Z",
                    "updatedAt": "2020-03-13T12:40:23.472Z"
                }
            }
        ]
    }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    message: "User Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Find One Project**
----
  Returns json data about a single user.

* **URL**

  ```
  /projects/:id
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   ```
   id: [number]
   ```
* **Data Params**

    ```
    headers: {
     access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    
    {
        "id": 12,
        name: "maymaymay",
        "createdAt": "2020-03-13T09:06:13.670Z",
        "updatedAt": "2020-03-13T09:06:13.670Z",
        "Users": [
            {
                "id": 2,
                "name": null,
                "email": "mara@mail.com",
                "password": "$2a$10$Mf9NJy9LmUhd9bWl3OIqduSmHsItmyu5BLf27d8OMbFJWsFq22sE.",
                "createdAt": "2020-03-13T07:46:10.093Z",
                "updatedAt": "2020-03-13T07:46:10.093Z",
                "ProjectUser": {
                    "id": 4,
                    "UserId": 2,
                    "ProjectId": 12,
                    "createdAt": "2020-03-13T09:06:13.750Z",
                    "updatedAt": "2020-03-13T09:06:13.750Z"
                }
            },
            {
                "id": 4,
                "name": null,
                "email": "vera@mail.com",
                "password": "$2a$10$C6yj2afl6yk9khHAmsOcwOYsb1MMuKYLwbdkjHnks5cDVjVb00uKi",
                "createdAt": "2020-03-13T10:23:09.879Z",
                "updatedAt": "2020-03-13T10:23:09.879Z",
                "ProjectUser": {
                    "id": 23,
                    "UserId": 4,
                    "ProjectId": 12,
                    "createdAt": "2020-03-13T12:40:23.472Z",
                    "updatedAt": "2020-03-13T12:40:23.472Z"
                }
            }
        ]
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    message: "User Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 



**Update Project**
----
  Returns json data about a single user.

* **URL**

  ```
  /projects/:id
  ```

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

   ```
   id: [number]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    ```
    {
      name : "maymaymay"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      msg: "Success update data",
      data:{
        "id": 12,
        "name": "maymaymay",
        "createdAt": "2020-03-13T09:06:13.670Z",
        "updatedAt": "2020-03-13T09:06:13.670Z",
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    message: "Project Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 
**Delete Project**
----
  Returns json data about a single user.

* **URL**

  ```
  /projects/:id
  ```

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

   ```
   id: [number]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    ```
    {
      name : "maymaymay"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      msg: "Success Delete data",
      data:{
        "id": 12,
        "name": "maymaymay",
        "createdAt": "2020-03-13T09:06:13.670Z",
        "updatedAt": "2020-03-13T09:06:13.670Z",
    }
    
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
    message: "Project Not Found!"
    }
    ``` 
    
    OR

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Create Project User**
----
  Returns json data about a single user.

* **URL**

  ```
  /projectusers
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   ```
   id: [number]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    ```
    {
      ProjectId : 1,
      'UserId' : 1
    }
    ```

* **Success Response:**

  * **Code:** 201<br />
    **Content:** 
    ```
    {
      id: 31,
      ProjectId: 1,
      UserId: 2,
      updatedAt: "2020-03-13T22:59:57.831Z",
      createdAt: "2020-03-13T22:59:57.831Z"
    }
    
    ```
 
* **Error Response:**



  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 


**Invite Project User**
----
  Returns json data about a single user.

* **URL**

  ```
  /projectusers/invite
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   ```
   id: [number]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    ```
    {
      ProjectId : 1,
      'UserId' : 1
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: 31,
      ProjectId: 1,
      UserId: 2,
      updatedAt: "2020-03-13T22:59:57.831Z",
      createdAt: "2020-03-13T22:59:57.831Z"
    }
    
    ```
 
* **Error Response:**


  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Find All Project User**
----
  Returns json data about a single user.

* **URL**

  ```
  /projectusers/invite
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `NONE`

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
        id: 31,
        ProjectId: 1,
        UserId: 2,
        updatedAt: "2020-03-13T22:59:57.831Z",
        createdAt: "2020-03-13T22:59:57.831Z"
      },
      {
        id: 32,
        ProjectId: 12,
        UserId: 2,
        updatedAt: "2020-03-13T22:59:57.831Z",
        createdAt: "2020-03-13T22:59:57.831Z"
      }
    ]
    
    ```
 
* **Error Response:**


  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Find One Project User**
----
  Returns json data about a single user.

* **URL**

  ```
  /projectusers/:id
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   ```
   id: [Integer]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    
      {
        id: 31,
        ProjectId: 1,
        UserId: 2,
        updatedAt: "2020-03-13T22:59:57.831Z",
        createdAt: "2020-03-13T22:59:57.831Z"
      }
    
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Project User is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Delete Project User**
----
  Returns json data about a single user.

* **URL**

  ```
  /projectusers/:id
  ```

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

   ```
   id: [Integer]
   ```

*  **Headers**

   **Required:**

   ```
   access_token: 'sdoahdqqwd,ue1iuego3eh09efhb'
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    
      {
        1
      }
    
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Project User is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Find All Categories**
----
  Returns json data about a single user.

* **URL**

  ```
  /categories
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `NONE`

*  **Headers**

   **Required:**

   `NONE`

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    
      [
        {
            "id": 1,
            "title": "Backlog",
            "createdAt": "2020-03-13T06:18:17.227Z",
            "updatedAt": "2020-03-13T06:18:17.227Z"
        },
        {
            "id": 2,
            "title": "Product",
            "createdAt": "2020-03-13T06:18:17.227Z",
            "updatedAt": "2020-03-13T06:18:17.227Z"
        },
        {
            "id": 3,
            "title": "Develpment",
            "createdAt": "2020-03-13T06:18:17.227Z",
            "updatedAt": "2020-03-13T06:18:17.227Z"
        },
        {
            "id": 4,
            "title": "Done",
            "createdAt": "2020-03-13T06:18:17.227Z",
            "updatedAt": "2020-03-13T06:18:17.227Z"
        }
    ]
    
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Project User is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Create Task**
----
  Returns json data about a single user.

* **URL**

  ```
  /tasks
  ```

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

   `NONE`

*  **Headers**

   **Required:**

   ```
   project_id : 'asdgwiagdwqbeqw doubdoqwd;qdb
   ```

* **Data Params**

    ```
    {
      "title" : "Belajar Ga kemana mana deh unsos",
      "description" : "bersama keluarga kautsar"
    }
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      "id": 13,
      "title": "Belajar Ga kemana mana deh unsos",
      "description": "bersama keluarga kautsar",
      "ProjectId": 1,
      "updatedAt": "2020-03-13T23:14:48.267Z",
      "createdAt": "2020-03-13T23:14:48.267Z",
      "CategoryId": 1
    }
    ```
 
* **Error Response:**



  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 


**Find All Task**
----
  Returns json data about a single user.

* **URL**

  ```
  /tasks
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `NONE`

*  **Headers**

   **Required:**

   ```
   project_id : 'asdgwiagdwqbeqw doubdoqwd;qdb
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
        "id": 13,
        "title": "Belajar Ga kemana mana deh unsos",
        "description": "bersama keluarga kautsar",
        "ProjectId": 1,
        "updatedAt": "2020-03-13T23:14:48.267Z",
        "createdAt": "2020-03-13T23:14:48.267Z",
        "CategoryId": 1
      },
      {
        "id": 14,
        "title": "Belajar Ga kemana mana deh unsos",
        "description": "bersama keluarga kautsar",
        "ProjectId": 1,
        "updatedAt": "2020-03-13T23:14:48.267Z",
        "createdAt": "2020-03-13T23:14:48.267Z",
        "CategoryId": 1
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Task is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 


**Find One Task**
----
  Returns json data about a single user.

* **URL**

  ```
  /tasks/:id
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `id: [integer]`

*  **Headers**

   **Required:**

   ```
   project_id : 'asdgwiagdwqbeqw doubdoqwd;qdb
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "id": 13,
      "title": "Belajar Ga kemana mana deh unsos",
      "description": "bersama keluarga kautsar",
      "ProjectId": 1,
      "updatedAt": "2020-03-13T23:14:48.267Z",
      "createdAt": "2020-03-13T23:14:48.267Z",
      "CategoryId": 1
    }
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Task is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 



**Update Task**
----
  Returns json data about a single user.

* **URL**

  ```
  /tasks/:id
  ```

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

   `id: [integer]`

*  **Headers**

   **Required:**

   ```
   project_id : 'asdgwiagdwqbeqw doubdoqwd;qdb
   ```

* **Data Params**

    ```
    {
      title: 'DIubuah',
      description: 'isinya',
      CategoryId : 1
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "id": 13,
      "title": "DIubah",
      "description": "isinya",
      "ProjectId": 1,
      "updatedAt": "2020-03-13T23:14:48.267Z",
      "createdAt": "2020-03-13T23:14:48.267Z",
      "CategoryId": 1
    }
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Task is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 

**Delete Task**
----
  Returns json data about a single user.

* **URL**

  ```
  /tasks/:id
  ```

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**

   `id: [integer]`

*  **Headers**

   **Required:**

   ```
   project_id : 'asdgwiagdwqbeqw doubdoqwd;qdb
   ```

* **Data Params**

    `NONE`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "id": 13,
      "title": "DIubah",
      "description": "isinya",
      "ProjectId": 1,
      "updatedAt": "2020-03-13T23:14:48.267Z",
      "createdAt": "2020-03-13T23:14:48.267Z",
      "CategoryId": 1
    }
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```
    {
    message: "Task is not Found!"
    }
    ``` 

    OR 

  * **Code:** 500 <br />
    **Content:** 
    ```
    {
    message: "Internal Server Error"
    }
    ``` 