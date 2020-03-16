# kanban_server

## **Register**
Add a new user to sign up 

*   **URL**

    _/register_

*   **Method**

    `POST`

*   **Headers**
    **Required**

    None

* **Data Body**

    `email=[string]`<br>
    `password=[string]` <br>

* **Success Response**
  *  **Code:** 201
  *  **Content:**
      ```javascript
      {
          "User": {
              "id": 1,
              "email": "mail@mail.com"
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzOTM0Mzc3fQ.fACBC0005EbIv2JxJLWJGULN0ub6QOy_oukJvQY0IsQ"
      }
      ````

      OR

* **Error Response:**
  * **Code:** 400
  * **Content:** 
    ```javascript
    {
      "error": "Password has at least 6 characters" 
    }
    ```


## **Login**
Login to Kanban

* **URL**

  _/login/_

* **Method**

  `POST`

* **Headers**
  **Required:**

  None

* **URL Params**
  **Required:**

  None

* **Data Body**

  `email=[string]`<br>
  `password=[string]`

* **Success Response:**
  * **Code:** 201
  * **Content:** 
    ```javascript
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzOTM0NTUwfQ.TPbPFH51_iP3Ipb1ZKqTp48_BiKmTNkrK3a4q_43fvA"
    }
    ```

    OR

* **Error Response:**
  * **Code:** 400
  * **Content:** 
    ```javascript
    {
      "error": "Email or password is wrong" 
    }
 

## **Show All Tasks**
Show all tasks

* **URL**

  _/tasks/_

* **Method**

  `GET`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  None

* **Data Body**

  None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
    ```javascript
    {
      "data": [
          {
              "id": 1,
              "description": "ngerjain kanban",
              "CategoryId": 1,
              "UserId": 1,
              "updatedAt": "2020-03-11T14:01:33.330Z",
              "createdAt": "2020-03-11T14:01:33.330Z"
          },
          {
              "id": 2,
              "description": "fancy-todo",
              "CategoryId": 1,
              "UserId": 1,
              "createdAt": "2020-03-11T14:13:42.386Z",
              "updatedAt": "2020-03-11T14:13:42.386Z"
          },
      ]
    }
    ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "error": "Internal Server Error" 
    }
    ```


## **Create a New Task**
Add a new task
* **URL**

  _/tasks/_

* **Method**

  `POST`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**

  None

* **Data Body**

  `description=[string]`

* **Success Response:**
  * **Code:** 201
  * **Content:** 
    ```javascript
    {
        "data": {
            "id": 1,
            "description": "ngerjain kanban",
            "CategoryId": 1,
            "UserId": 1,
            "updatedAt": "2020-03-11T14:01:33.330Z",
            "createdAt": "2020-03-11T14:01:33.330Z"
        }
    }
    ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "error": "Internal Server Error" 
    }
    ```


## **FindOne task by Id**
find one task from kanban by id 

* **URL**

  _/tasks/:id_

* **Method**

  `GET`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Body**

   None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
    ```javascript
    {
        "data": {
            "id": 2,
            "description": "fancy-todo",
            "CategoryId": 1,
            "UserId": 1,
            "createdAt": "2020-03-11T14:13:42.386Z",
            "updatedAt": "2020-03-11T14:13:42.386Z"
        }
    }
    ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "error": "Internal Server Error" 
    }
    ```


## **Delete task by Id**
Delete task by id 

* **URL**

  _/tasks/:id_

* **Method**

  `DELETE`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**
  
  `id=[integer]`

* **Data Body**

   None

* **Success Response:**
  * **Code:** 200
  * **Content:** 
    ```javascript
      {
          "data": {
              "id": 1,
              "description": "ngerjain kanban",
              "CategoryId": 1,
              "UserId": 1,
              "createdAt": "2020-03-11T14:01:33.330Z",
              "updatedAt": "2020-03-11T14:01:33.330Z"
          }
      }
      ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "error": "Internal Server Error" 
    }
    ```


## **Update Task by Id** 
Edit a task by id

* **URL**

  _/tasks/:id_

* **Method**

  `PUT`

* **Headers**
  **Required:**

  `token`

* **URL Params**
  **Required:**

  `id:[integer]`

* **Data Body**

  `description=[string]`

* **Success Response:**
  * **Code:** 200
  * **Content:** 
    ```javascript
    {
        "data": {
            "id": 3,
            "description": "Update kanban",
            "CategoryId": 3,
            "UserId": 1,
            "createdAt": "2020-03-12T06:03:03.622Z",
            "updatedAt": "2020-03-12T06:11:08.922Z"
        }
    }
    ```

    OR

* **Error Response:**
  * **Code:** 500
  * **Content:** 
    ```javascript
    {
      "error": "Internal Server Error"
    }
    ```
