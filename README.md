# kanban_server

## Login

----

Login into website 

* **URL**

  `/login`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Data Params**

  `{
      email: mail@mail.com,
      password: 123456
  }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    { token: <token> }
    ```
 
* **Error Response:**
  * **Code** 400 BAD REQUEST <br />
    **Content** `{ error: Email / Password invalid!}`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

## Google Login

----

Login into website using Google Sign In

* **URL**

  `/googleLogin`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Headers Params**

  `{ id_token }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    { token: <token> }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

## Register

----

Register into website

* **URL**

  `/register`

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `None`

* **Data Params**

  `{
      email: mail@mail.com,
      password: 123456,
      fullname: John Doe
  }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    { token: <token> }
    ```
 
* **Error Response:**
  
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Please input your email!" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "E-mail has been registered, please use other e-mail" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Password at lease 5 characters" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Please input your name" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

## Create Task

----

Create Task

* **URL**

  `/task`

* **Method:**

  `POST`
  
*  **Headers Params**

   **Required:**
 
   `{ token: jwt.token }`

* **Data Params**

  `{
      title: New task,
      descrption: Description of new task,
      badge: 0,
      category: 0
  }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    { message: Task Created! }
    ```
 
* **Error Response:**
  
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Please input title" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

## Get Task

----

Get all task created by User

* **URL**

  `/task`

* **Method:**

  `GET`
  
*  **Headers Params**

   **Required:**
 
   `{ token: jwt token }`

* **Data Params**

  `{
      title: New task,
      descrption: Description of new task,
      badge: 0,
      category: 0
  }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
            id: 1,
            title: New Task,
            description: Description of new task,
            badge: 0,
            category: 1
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`
<br /><br />

## Delete Task

----

Delete task created by certain User

* **URL**

  `/task/:id`

* **Method:**

  `DELETE`
  
*  **Headers Params**

   **Required:**
 
   `{ token: jwt token }`

* **URL Params**

  `/task/:id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        message: Task Deleted
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`

      OR

  * **Code:** 403 NOT AUTHORIZED <br />
    **Content:** `{ error : "You're not authorized to do this action" }`

          OR

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ error : "Authentication failed! Please re-login }`
<br /><br />

## Update Task

----

Update task created by certain User

* **URL**

  `/task/:id`

* **Method:**

  `PUT`
  
*  **Headers Params**

   **Required:**
 
   `{ token: jwt token }`

* **URL Params**

  `/task/:id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        message: Task Updated
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal server error" }`

      OR

  * **Code:** 403 NOT AUTHORIZED <br />
    **Content:** `{ error : "You're not authorized to do this action" }`

          OR

  * **Code:** 404 BAD REQUEST <br />
    **Content:** `{ error : "Authentication failed! Please re-login }`
<br /><br />