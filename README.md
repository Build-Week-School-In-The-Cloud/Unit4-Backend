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
/api/volunteer           | 200
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



------------------------------
# Views
`/api/admin/` : admin landing page [subject to change response]
```
[
{
"id": 21,
"admin_First": "Jack",
"admin_Last": "Dempsy"
},
{
"id": 22,
"admin_First": "Jill",
"admin_Last": "Hill"
},
{
"id": 23,
"admin_First": "Jester",
"admin_Last": "Tester"
},
{
"id": 24,
"admin_First": "Dummy",
"admin_Last": "Administrator"
}
]
```

`/api/admin/tasks` : list of tasks
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

`/api/volunteer` : volunteer landing page
```
{
"page": "Volunteer Portal"
}
```

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
```
{
"page": "Student Portal"
}
```

`/api/student/view` : list of volunteers
```
[
{
"id": 21,
"firstName": "Bruce",
"lastName": "Willis",
"auth_id": 2,
"on_line": 1,
"country": "USA",
"available_time": "9am-5pm"
},
{
"id": 22,
"firstName": "Lisa",
"lastName": "Willis",
"auth_id": 2,
"on_line": 1,
"country": "USA",
"available_time": "9am-5pm"
},
{
"id": 23,
"firstName": "Sherr",
"lastName": "Willis",
"auth_id": 2,
"on_line": 0,
"country": "USA",
"available_time": "9am-5pm"
},
{
"id": 24,
"firstName": "Bruce",
"lastName": "Lee",
"auth_id": 2,
"on_line": 0,
"country": "CHINA",
"available_time": "9am-5pm"
}
]
```

`/api` : restricted
```
{
"error": "Forbidden"
}
```

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

