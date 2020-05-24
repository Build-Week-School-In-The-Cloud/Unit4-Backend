# Unit4-Backend
## School in the Cloud
**Heroku link:** [https://build-week-school-in-the-cloud.herokuapp.com/]

================================================================
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
-------------------------|------------------
/                        | 200
/api                     | 403
/api/students            | 200
/api/students/view       | 200
/api/volunteer/:id/tasks | 200
/api/admin               | 200
/api/admin/tasks         | 200
--------------------------------------------- 

---------------------------------------------
Content-Type | application/json
-------------|------------------
             |
Body         |  ```[{
             |   "task_id": 16,
             |   "task_name": "Zoom Session",
             |   "created_by": 2,
             |   "assigned_to": 1,
             |   "description": "Prepare the PVD and DB Schema",
             |   "due_date": "",
             |   "completed": 1
             |  },```
-------------|---------------------------------------------------------
------------------------------------------------------------------------

#### Body


============================================================================
**GET** `/api/admin`

#### Response
$if success: `200`
Content-Type | application/json

#### Body

[
{
"id": 1,
"firstName": "Jack",
"lastName": "Dempsy"
},
{
"id": 2,
"firstName": "Jill",
"lastName": "Hill"
},
{
"id": 3,
"firstName": "Jester",
"lastName": "Tester"
},
{
"id": 4,
"firstName": "Dummy",
"lastName": "Administrator"
}
]

***GET*** `/api/admin/tasks`

#### Body 

[
    {
        "task_id": 5,
        "task_name": "Zoom Session",
        "created_by": 2,
        "assigned_to": 1,
        "description": "Prepare the PVD and DB Schema",
        "due_date": ""
    },
]

### Response 


$if success : `200`



***POST*** `/api/admin`

#### Body
{
    firsName: "bobhope"
    lastName: "notNull"
}

#### Response
 $if failed `500` : { "message": "Failed to create new admin"}

 $if success `201` " { 
    "id": 5,
    "firstName": "bobhope",
    "lastName": "notNull",
    "auth_id": 1 
    }

***POST*** `/api/admin/tasks`

#### Body

Content-Type | application/json

{
        "task_id": 11,
        "task_name": "Test API Again",
        "created_by": 2,
        "assigned_to": 13,
        "description": "Testing a POST request from Admin View",
        "due_date": "05-25-2020"
},


$if success `201` : "message": "created new task"

==============================
# Views
`/api/admin/` : list of admins
`/api/admin/tasks` : list of tasks
`/api/users` : list of users
`/api/volunteer/:id/tasks` : list of tasks
`'/api/student/view'` : list of volunteers
