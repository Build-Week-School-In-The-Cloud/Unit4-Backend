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
Content-Type   | application/json
---------------|------------------
Body           | yess
---------------|------------------
Authentication | in progress
--------------------------------         

==============================
# Views
`/api/admin/` : list of admins
`/api/admin/tasks` : list of tasks
`/api/users` : list of users
`/api/volunteer/:id/tasks` : list of tasks
`'/api/student/view'` : list of volunteers
