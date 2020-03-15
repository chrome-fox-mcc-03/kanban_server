# kanban_server

**1. USERS**

**REGISTER**

* **URL**

    _/users/register_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 201 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapa@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ errors: ["You must enter an valid email address!",
    "Email address already in use!",
    "Password must at least 6 characters"
  ] }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**LOGIN**

* **URL**

    _/users/login_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 200 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapa@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ error: "email/password wrong" }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**LOGIN/REGISTER WITH GOOGLE**

* **URL**

    _/users/googleLogin_

* **Method :**

    `POST`

* **Success Response :**

* **Code:** 200 <br />
    **Content :** `{
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoic2lhcGFAZ21haWwuY29tIiwiaWF0IjoxNTgzNTg0Mjc4fQ.Xin8MjsiM5TiGEw6xu-1_VSMrPPCjc8OJmyemXNrAWA",
      "user": {
        "id": 35,
        "email": "siapaya@gmail.com"
      }
    }`

* **Error Response :**

  * **Code:** 400 <br />
    **Content:** `{ error: "Email alread registered" }`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**2. CATEGORIES**
**FIND ALL**

* **URL**

    _/categories_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `[
      {
        "id": 1,
        "name": "Backlog",
        "createdAt": "2020-03-13T01:45:24.759Z",
        "updatedAt": "2020-03-13T01:45:24.759Z"
      },
      {
        "id": 2,
        "name": "Product",
        "createdAt": "2020-03-13T01:45:24.759Z",
        "updatedAt": "2020-03-13T01:45:24.759Z"
      },
      {
        "id": 3,
        "name": "Development",
        "createdAt": "2020-03-13T01:45:24.759Z",
        "updatedAt": "2020-03-13T01:45:24.759Z"
      },
      {
        "id": 4,
        "name": "Done",
        "createdAt": "2020-03-13T01:45:24.759Z",
        "updatedAt": "2020-03-13T01:45:24.759Z"
      }
    ]`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**3. COLLABORATION**

**FIND BY PROJECT ID**

* **URL**

    _/collaborations/:id_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `[
    {
      "UserId": 1,
      "ProjectId": 1,
      "createdAt": "2020-03-13T01:34:37.936Z",
      "updatedAt": "2020-03-13T01:34:37.936Z",
      "User": {
        "id": 1,
        "name": "andre",
        "email": "andre@gmail.com",
        "createdAt": "2020-03-13T01:34:16.415Z",
        "updatedAt": "2020-03-13T01:34:16.415Z"
      }
    }
  ]`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**CREATE**

* **URL**

    _/collaborations_

* **Method :**

    `POST`

* **Headers**

  **Required :**

    `access_token`
* **Data Params**

  `{
    "email": "andre@gmail.com"}`

* **Success Response :**

  * **Code:** 201 <br />
    **Content :** `{
      "msg": "User successfully joined with your project!",
      "collaboration": {
        "UserId": 3,
        "ProjectId": 1,
        "updatedAt": "2020-03-12T01:31:34.084Z",
        "createdAt": "2020-03-12T01:31:34.084Z",
        "id": 2
      }
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**DELETE**

* **URL**

    _/collaborations_

* **Method :**

    `DELETE`

* **Headers**

  **Required :**

    `access_token`
* **URL Params**

  ProjectId,
  UserId


* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `{
  "msg": "User removed from the Project!"
}`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**4. PROJECTS**

**FIND ALL**

* **URL**

    _/projects_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `[
      {
        "UserId": 1,
        "ProjectId": 1,
        "createdAt": "2020-03-13T01:34:37.936Z",
        "updatedAt": "2020-03-13T01:34:37.936Z",
        "Project": {
          "id": 1,
          "name": "Project Andre 1",
          "createdAt": "2020-03-13T01:34:37.931Z",
          "updatedAt": "2020-03-13T01:34:37.931Z"
        }
      },
      {
        "UserId": 1,
        "ProjectId": 4,
        "createdAt": "2020-03-14T10:24:38.977Z",
        "updatedAt": "2020-03-14T10:24:38.977Z",
        "Project": {
          "id": 4,
          "name": "PROJECT ANDRE 2",
          "createdAt": "2020-03-14T10:24:38.940Z",
          "updatedAt": "2020-03-14T10:24:38.940Z"
        }
      }
    ]`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**FIND ONE**

* **URL**

    _/projects/:id_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `{
      "id": 1,
      "name": "Project Andre 1",
      "createdAt": "2020-03-13T01:34:37.931Z",
      "updatedAt": "2020-03-13T01:34:37.931Z",
      "Tasks": [
        {
          "id": 2,
          "title": "Mulai bikin routing",
          "description": "bikin routing semuanya ya",
          "CategoryId": 4,
          "ProjectId": 1,
          "createdAt": "2020-03-13T12:07:16.706Z",
          "updatedAt": "2020-03-14T11:22:26.273Z"
        }
      ]
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**CREATE**

* **URL**

    _/projects_

* **Method :**

    `POST`

* **Headers**

  **Required :**

    `access_token`
* **Data Params**

  `{
    "name": "Project Name" }`

* **Success Response :**

  * **Code:** 201 <br />
    **Content :** `{
      "msg": "Project created!",
      "project": {
        "id": 6,
        "name": "Kanban Client",
        "updatedAt": "2020-03-12T16:44:12.346Z",
        "createdAt": "2020-03-12T16:44:12.346Z"
      }
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**DELETE**

* **URL**

    _/projects/:id_

* **Method :**

    `DELETE`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `
      {
    "msg": "Data deleted!",
    "project": {
      "id": 2,
      "name": "Ecommerce",
      "createdAt": "2020-03-11T14:25:10.659Z",
      "updatedAt": "2020-03-11T14:25:10.659Z"
    }
  }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**5. TASKS**

**FIND ALL**

* **URL**

    _/tasks_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **URL Params**

  CategoryId, ProjectId


* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `[
      {
      "id": 2,
      "title": "Mulai bikin routing",
      "description": "bikin routing semuanya ya",
      "CategoryId": 4,
      "ProjectId": 1,
      "createdAt": "2020-03-13T12:07:16.706Z",
      "updatedAt": "2020-03-14T11:22:26.273Z"
    }
    ]`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**FIND ONE**

* **URL**

    _/tasks/:id_

* **Method :**

    `GET`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `{
      "id": 2,
      "title": "Mulai bikin routing",
      "description": "bikin routing semuanya ya",
      "CategoryId": 4,
      "ProjectId": 1,
      "createdAt": "2020-03-13T12:07:16.706Z",
      "updatedAt": "2020-03-14T11:22:26.273Z"
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

**CREATE**

* **URL**

    _/tasks_

* **Method :**

    `POST`

* **Headers**

  **Required :**

    `access_token`
* **Data Params**

  `{
    "title" : "Example Title",
    "descriptiom" : "Example Description" }`

* **Success Response :**

  * **Code:** 201 <br />
    **Content :** `{
      "msg": "Task created!",
      "task": {
        "id": 1,
        "title": "membuat server",
        "description": "endpoint, authentication, authorization ",
        "CategoryId": 1,
        "ProjectId": 1,
        "updatedAt": "2020-03-11T14:15:22.577Z",
        "createdAt": "2020-03-11T14:15:22.577Z"
      }
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**UPDATE**

* **URL**

    _/tasks/:id_

* **Method :**

    `PUT`

* **Headers**

  **Required :**

    `access_token`
* **Data Params**

  `{
    "title" : "Example Title",
    "descriptiom" : "Example Description" }`

* **Success Response :**

  * **Code:** 201 <br />
    **Content :** `{
      "msg": "Task updated!",
      "task": {
        "id": 1,
        "title": "membuat server",
        "description": "endpoint, authentication, authorization ",
        "CategoryId": 1,
        "ProjectId": 1,
        "updatedAt": "2020-03-11T14:15:22.577Z",
        "createdAt": "2020-03-11T14:15:22.577Z"
      }
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


**CHANGE CATEGORY**

* **URL**

    _/tasks/:id_

* **Method :**

    `PATCH`

* **Headers**

  **Required :**

    `access_token`
* **Data Params**

  {
    "CategoryId": 2`
  `

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `{
      "msg": "Task Status Updated!"
      "task": {
        "id": 1,
        "title": "Client",
        "CategoryId": 1,
        "ProjectId": 1,
        "createdAt": "2020-03-11T14:15:22.577Z",
        "updatedAt": "2020-03-11T14:29:06.182Z",
        "description": "Add Vue"
      }
    }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`



**DELETE**

* **URL**

    _/tasks/:id_

* **Method :**

    `DELETE`

* **Headers**

  **Required :**

    `access_token`

* **Success Response :**

  * **Code:** 200 <br />
    **Content :** `
      {
        "msg": "Data deleted!",
        "project": 1
      }`

* **Error Response :**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
