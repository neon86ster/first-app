# Node.js PostgreSQL with Express Rest APIs


We will build Rest Apis that can create and find teacher and course by name.

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/tutorials`	            get all teacher
- POST    `api/tutorials`             add new teacher
- GET     `api/tutorials`	            get all course
- POST    `api/tutorials`             add new course



### Test the APIs
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.

- Create a new Tutorial using `POST /tutorials` Api

After creating some new teacher, you can check PostgreSQL table:
```testdb=# select * from teacher;
 user_id |    first_name    |    last_name    | course_id |         createdAt          |         updatedAt
----+-------------+-------------------+-----------+----------------------------+----------------------------

- Retrieve all Tutorials using `GET /tutorials` Api


- Find all Tutorials which title contains 'sai': `GET /tutorials?first_name=sai`



## Project setup
```
npm install
```

### Run
```
node server.js
```
