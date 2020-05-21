# Unit4-Backend
## School in the Cloud
**Heroku link:** [https://stc-school-in-the-cloud.herokuapp.com/]

================================================================
## USERS ROUTER

===================================================================
**GET `/api/users` 

#### Response 
Content-Type | application/json

#### Body
[
{
"id": 1,
"username": "student",
"password": "student"
},
{
"id": 2,
"username": "admin",
"password": "admin"
},
{
"id": 3,
"username": "volunteer",
"password": "credit"
}
]
============================================================================
**GET `/api/admin`

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

=============================================================================
***POST `/api/admin`

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

