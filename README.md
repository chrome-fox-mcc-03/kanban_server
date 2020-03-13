# kanban_server

## Register
```javascript
{
    "User": {
        "id": 1,
        "email": "mail@mail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzOTM0Mzc3fQ.fACBC0005EbIv2JxJLWJGULN0ub6QOy_oukJvQY0IsQ"
}
````


## Login

```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzOTM0NTUwfQ.TPbPFH51_iP3Ipb1ZKqTp48_BiKmTNkrK3a4q_43fvA"
}
```

## Create

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

## findOne

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

## Delete

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

## Update 

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