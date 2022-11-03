## Animo Demo API

This is a demo API for the Animo Internship assignment. It is a simple API that allows you to create, read, update and delete users.

### How to use

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm dev` to start the server
4. Set up a database and add the credentials to the `.env` file
5. Add `PORT` and `LOCAL_SERVER_URL` to the `.env` file
6. Run `npm run dev` to start the development server

- LOCAL_SERVER_URL should be `http://localhost:PORT`
- PORT should be the port you want to run the server on
- You can use `/api/docs` to view the API documentation

### Endpoints

- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get a single user
- POST `/api/users` - Create a user
- PATCH `/api/users/:id` - Update a user
- DELETE `/api/users/:id` - Delete a user

### Response Examples

```json
[
  {
    "_id": "6363658566116801e2c83f7a",
    "firstName": "Sayed",
    "lastName": "Ahmed",
    "age": 25,
    "country": "India",
    "createdAt": "2022-11-03T06:53:57.081Z",
    "updatedAt": "2022-11-03T06:53:57.081Z",
    "__v": 0
  },
  {
    "_id": "63639528afa088ea4718ce13",
    "firstName": "Spider",
    "lastName": "Man",
    "age": 24,
    "country": "USA",
    "createdAt": "2022-11-03T10:17:12.147Z",
    "updatedAt": "2022-11-03T10:18:30.663Z",
    "__v": 0
  }
]
```
