##Tasks API

APIs
--- 

Get all tasks: 

Request URL: /api/tasks 
Method: GET 
Body: --
Response: [{task}, {task}]


Get single task 

Request URL: /api/tasks/{some unique identifier}
Method: GET 
Body: --
Response: task 


Create a task 

Request URL: /api/tasks 
Method: POST 
Body: {task}
Response: status: true / task created 

Update a task 
Request URL: /api/tasks/{some unique id}
Method: PUT / PATCH
Body: {task}
Response: status: true / update task object 


DELETE a task 

Request URL: /api/tasks/{some unique id}
Method: DELETE
Response: status: true / deleted task object