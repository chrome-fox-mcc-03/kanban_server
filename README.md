# Kanban-server

**Register**
----
  
* **URL**

  `http://localhost:3000/register`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
      username: "user",
      email: "user@mail.com",
      password: "12345"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: "Success register" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Password cannot less than 5 characters" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Password cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Username cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Email cannot be empty" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Email must contain email format" }`
  
  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Email already in use" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Login**
----
  
* **URL**

  `http://localhost:3000/login`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
      email: "user@mail.com",
      password: "12345"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

  ```javascript
    {
      token: "<token>",
      message: "Success login as <username>"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Invalid email / password" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Create Group**
----
  
* **URL**

  `http://localhost:3000/group`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
      group_name: "<your group name>"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

  ```javascript
    {
      message: "Success create Group"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Group name cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`




**Find All Group**
----
  
* **URL**

  `http://localhost:3000/group`

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

  ```javascript
    {
      data: [
        { 
          group_name: "<group name>"
        }
      ]
    }
  ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Invite User To Group**
----
  
* **URL**

  `http://localhost:3000/group/invite`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
      email: "<user email>"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

  ```javascript
    {
      message: "Success invite ${username}"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "User not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Create Task**
----
  
* **URL**

  `http://localhost:3000/task`

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**

  ```javascript
    {
      title: "<your title>",
      description: "<your description>"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

  ```javascript
    {
      message: "Success create new KanbaN"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Title cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Description cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Find All Task**
----
  
* **URL**

  `http://localhost:3000/task`

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

  ```javascript
    {
      data: [
        { 
          title: "<title>",
          CategoryId: "<category id>"
        }
       ]
    }
  ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Update Task**
----
  
* **URL**

  `http://localhost:3000/task/:id`

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    **Required:**

  ```javascript
    {
      title: "<your new title>"
    }
  ```

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

  ```javascript
    {
      message: "Success update KanbaN"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Title cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**Delete Task**
----
  
* **URL**

  `http://localhost:3000/task:id`

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    None

*  **URL headers**

    **Required:**

    `token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

  ```javascript
    {
      message: "Success delete KanbaN"
    }
  ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Title cannot be empty" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`
