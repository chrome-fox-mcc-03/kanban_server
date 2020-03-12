# Catban server

**Base URL: http://localhost:3000**


## User
---

*Login*
---

  Returns token and username of the user with status of 200.

* **URL**

  /login

* **Method:**

  `GET`

* **Data Params**

  * `email=[string]`
  * `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token, username }`
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ errors : "Wrong email / password" }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/login',
      method : "GET",
      data: {
        email: ...,
        password: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

  *Register*
---

  Returns message of success with status 201.

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

  * `username=[string]`
  * `email=[string]`
  * `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Register successful' }`
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ errors : ["Email cannot empty", "Password cannot empty", "Email must be unique", ...] }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/register',
      method : "POST",
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

  *google*
---

  Returns token and username with status 200.

* **URL**

  /google

* **Method:**

  `POST`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token }`
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ errors : 'Google siginin errors' }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/register',
      method : "POST",
      data: {
        username: ...,
        email: ...,
        password: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

## Projects

---

*findAll*
---

  Returns all projects belong to a user. Status code 200.

* **URL**

  /projects

* **Method:**

  `GET`

* **Headers:**

  * token

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ projects }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects',
      method : "GET",
      header: { token }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*create*
---

  Returns message of success. Status code 201.

* **URL**

  /projects/create

* **Method:**

  `POST`

* **Headers:**

  * token

* **Data Params**

  * `name=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ projects }`
 
* **Error Response:**

  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ message: 'Project name cannot be empty' }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects',
      method : "POST",
      headers: { token },
      data: {
        name: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*findByPk*
---

  Returns all projects belong to a user. Status code 200.

* **URL**

  /projects/:id

* **Method:**

  `GET`

* **Headers:**

  * token

* **Data URL:**

  * `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ projects }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects/1',
      method : "GET",
      headers { token }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

## Members

---

*invite*
---

  Returns message of success. Status code 201.

* **URL**

  /members/invite

* **Method:**

  `POST`

* **Headers:**

  * token

* **Data Params**

    * `UserId=[integer]`
    * `ProjectId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ projects }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects',
      method : "GET",
      header: { token }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*findUsers*
---

  Returns users that are not part of current project. Status code 200.

* **URL**

  /members/:groupId

* **Method:**

  `POST`

* **Headers:**

  * token

* **Data URL**

    * `groupId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ users }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects',
      method : "GET",
      header: { token }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*exit*
---

  Returns message of success. Status code 201.

* **URL**

  /members/:groupId/exit

* **Method:**

  `DELETE`

* **Headers:**

  * token

* **Data URL:**

  * `groupId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Exit project successful' }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/projects',
      method : "GET",
      header: { token }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

## Tasks

---

*findAll*
---

  Returns tasks belong to a group the current usr currently join. Status code 200.

* **URL**

  /tasks

* **Method:**

  `GET`

* **Headers:**

  * token

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ tasks }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/tasks',
      method : "GET"
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

  *findByPk*
---

  Returns token and username of the user.

* **URL**

  /tasks/:id

* **Method:**

  `GET`

* **Headers:**

  * token

* **Data URL:**

  * `id=[integer]`

* **Data Params:**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ task }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/tasks/:id',
      method : "GET"
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```

*create*
---

  Returns message of success. Status code 201.

* **URL**

  /tasks

* **Method:**

  `POST`

* **Headers:**

  * token

* **Data params:**

    * `tittle=[string]`
    * `description=[string]`
    * `GroupId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Create task successsful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors: 'Title cannot be empty' }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/tasks',
      method : "POST",
      headers: { token },
      data: {
        title: ...,
        description: ...,
        GroupId: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*edit*
---

  Returns message of success. Status code 200.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`

* **Headers:**

  * token

* **Data URL:**

  * `id=[integer]`

* **Data params:**

    * `tittle=[string]`
    * `description=[string]`
    * `GroupId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Edit task successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors: 'Title cannot be empty' }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/tasks/1',
      method : "PUT",
      headers: { token },
      data: {
        title: ...,
        description: ...,
        GroupId: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

*delete*
---

  Returns message of success. Status code 200.

* **URL**

  /tasks/:id/delete

* **Method:**

  `DELETE`

* **Headers:**

  * token

* **Data URL:**

  * `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Delete task successful' }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors: 'Title cannot be empty' }`

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/tasks',
      method : "POST",
      headers: { token },
      data: {
        title: ...,
        description: ...,
        GroupId: ...
      }
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---

## Category

---

*findAll*
---

  Returns all categories in database. Status code 200.

* **URL**

  /categories

* **Method:**

  `GET`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ categories }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

* **Sample Call:**

  ```javascript
    Axios({
      url: 'http://localhost:3000/categories',
      method : "GET"
    })
      .then(({data}) => {
        ...
      })
      .catch(err => {
        ...
      })
  ```
---