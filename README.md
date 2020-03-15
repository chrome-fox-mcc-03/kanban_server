**TASK SERVER**
----

**Create TASK**
  
  ADD TASK to the list TASKs and RETURN JSON Data of Created TASK

* **URL**

  ```
  /tasks
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    title=[string]
    status=[boolean]

   ```
   

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop', status: false, category: 'Backlog', UserId:1}`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "title must not null" }`

    OR

  * **Code:** 400  <br />
  **Content:** `{ error : "title must at least 5 charachter" }`
  


**View All TASK**

  RETURN JSON Data of all TASKS

* **URL**

  ```
  /tasks
  ```

* **Method:**

  ```
  GET
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 1, title : 'Eat Meal', category: 'Backlog',status: false, UserId: 1}, { id : 2, title : 'Eat Meal',category: 'Backlog', status: false, UserId: 1}]`
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`

**Find By Id TASK**

  RETURN JSON Data single TASK with specific Id

* **URL**

  ```
  /tasks/:id
  ```
* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  GET
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop',category: 'Backlog', status: false, UserId: 1}`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "TASK Not Found" }`
  or
  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`
  

**Update TASK**

  Update TASK with Specifies Id and RETURN JSON Data Updated TASK

* **URL**

  ```
  /tasks/:id
  ```

* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  PUT
  ```
   
* **Data Params**

  **Request Header**

    ```
    Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**

    ```
    title=[string]
    status=[boolean]
    category=[string]
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, title : 'Buy a Laptop', category: 'Backlog', status: false, UserId: 1}`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "TASK Not Found" }`
  OR
  * **Code:** 500  <br />
    **Content:** `{ error : "Internal Server Error" }`

**Delete TASK**

  DELETE TASK with Specifies Id and RETURN SUCCESS Message

* **URL**

  ```
  /tasks/:id
  ```

* **URL Params**

    **Required:**
   ```
   id=[integer]
   ```

* **Method:**

  ```
  DELETE
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ Success: SUCCESS Delete TASK }`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "TASK Not Found" }`

**Create USER**
  
  REGISTER USER TO DATABASE

* **URL**

  ```
  /register
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    email=[string]
    password=[string]
   ```
    **Optional:**

  ```
    name=[string]
  ```


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id : 1, email : 'email@gmail.com', password: 'hashedPasswordHere', name: 'abdul basith'}`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Field must not null" }`

**Login USER**
  
  Login User

* **URL**

  ```
  /login
  ```
* **Method:**

  `POST`
   
* **Data Params**
    **Request Header**<br>
    ```
      Content-Type: "application/json"
    ```

    **Request Body**<br>
    **Required:**
 
   ```
    email=[string]
    password=[string]
   ```
   

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ (Jason Web Token Here) }`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : "Field must not null" }`

  * **Code:** 401  <br />
    **Content:** `{ error : "Password or Email Invalid" }`

  
