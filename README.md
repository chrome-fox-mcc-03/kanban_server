Title

Register

URL

/user/register

Method:

<The request type>

POST

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:


Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:  "makan@mail.com"
Error Response: 
Code: 400
Content: [Error Message]

_______________________________________________________________________________________________

Title

Login

URL

/user/login

Method:

<The request type>

POST

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:


Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:  {
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJhc2RmQG1haWwuY29tIiwiaWF0IjoxNTg0MTE0NDg2fQ.SptEWb9XyK9IGfGihNT2aicbl_k9TP8vow8AN1twM5M',
  Email: 'asdf@mail.com'
}
Error Response: 
Code: 400
Content: [Error Message]

______________________________________________________________________________________________________

Title

Fetch Dashboard

URL

/

Method:

<The request type>

GET

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:

headers: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJhc2RmQG1haWwuY29tIiwiaWF0IjoxNTg0MTE0NDg2fQ.SptEWb9XyK9IGfGihNT2aicbl_k9TP8vow8AN1twM5M
}

Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:  ProjectUser {
    dataValues: {
      ProjectId: 6,
      UserId: 1,
      createdAt: 2020-03-13T10:50:05.172Z,
      updatedAt: 2020-03-13T10:50:05.172Z,
      Project: [Project]
    }
Error Response: 
Code: 400
Content: [Error Message]

_______________________________________________________________________________________________________

Title

Fetch Project

URL

/project

Method:

<The request type>

POST

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:

headers: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJhc2RmQG1haWwuY29tIiwiaWF0IjoxNTg0MTE0NDg2fQ.SptEWb9XyK9IGfGihNT2aicbl_k9TP8vow8AN1twM5M
}

data: {
    data
}

Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:   {
    Backlog(array),
    Product(array),
    Development(array),
    Done(array)
    }
Error Response: 
Code: 400
Content: [Error Message]
___________________________________________________________________________________
Title

Creeate Project

URL

/project/create


Method:

<The request type>

POST

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:

headers: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJhc2RmQG1haWwuY29tIiwiaWF0IjoxNTg0MTE0NDg2fQ.SptEWb9XyK9IGfGihNT2aicbl_k9TP8vow8AN1twM5M
}

data: {
    data(Project Name)
}

Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:   {
    Project Name
    }
Error Response: 
Code: 400
Content: [Error Message]
__________________________________________________________________________________________________________________________________
Title

Creeate Task

URL

/project/task/create


Method:

<The request type>

POST

URL Params

<If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints.>

Required:

headers: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJhc2RmQG1haWwuY29tIiwiaWF0IjoxNTg0MTE0NDg2fQ.SptEWb9XyK9IGfGihNT2aicbl_k9TP8vow8AN1twM5M
}

data: {
    data(Title,Content, Due_Date, ProjectId, UserId, Category)
}

Optional:


Data Params

<If making a post request, what should the body payload look like? URL Params rules apply here too.>

Success Response:

<What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!>

Code: 200
Content:   {
    Title,
    Content,
    Due_Date,
    Category
    }
Error Response: 
Code: 400
Content: [Error Message]