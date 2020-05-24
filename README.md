# Unit4-Backend
## School in the Cloud
**Heroku link:** [https://build-week-school-in-the-cloud.herokuapp.com/]
-------------------------------------------------------------------------
Login Router | Logout Router
-------------| -------------


POST                     |  RESPONSE
-------------------------|--------------
/api/login               |     200
/api/admin/tasks         |     201
/api/volunteer/:id/tasks |     500
-------------------------------------------
-------------------------------------------

GET                      | RESPONSE
-------------------------|-----------
/                        | 200
/api                     | 403
/api/student             | 200
/api/student/view        | 200
/api/volunteer/:id/tasks | 200
/api/admin               | 200
/api/admin/tasks         | 200
--------------------------------------

---------------------------------
Content-Type   | application/json
---------------|------------------
Body           | yes
---------------|------------
Authentication | in progress
-----------------------------    



==============================
# Views
`/api/admin/` : admin landing page
`/api/admin/tasks` : list of tasks
`/api/volunteer : volunteer landing page

`/api/volunteer/:id/tasks` : list of tasks 
```
[
{
"task_id": 16,
"task_name": "Zoom Session",
"created_by": 2,
"assigned_to": 1,
"description": "Prepare the PVD and DB Schema",
"due_date": "",
"completed": 1
},
{
"task_id": 17,
"task_name": "Study Session",
"created_by": 2,
"assigned_to": 4,
"description": "Prepare the PVD and DB Schema",
"due_date": "",
"completed": 1
},
{
"task_id": 18,
"task_name": "Study Session",
"created_by": 2,
"assigned_to": 8,
"description": "Prepare the PVD and DB Schema",
"due_date": "",
"completed": 0
}
]
```


`/api/student` : student landing page
`'/api/student/view'` : list of volunteers
`/api` : restricted

`/` : welcome page
```
{
"page": "Welcome to School In The Cloud"
}
```

## TODO
`/api/register` : on-boarding page
`/api/login` : login page
`/api/logout` : logout page

use Mocha or Jest for integration test

