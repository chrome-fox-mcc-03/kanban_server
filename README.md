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

