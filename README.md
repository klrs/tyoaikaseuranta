<h2>Running</h2>
1. replace const uri in backend/server.js with your own mongodb database url
1. run `npm init`
2. run `npm start` in /src/
3. run `npm start` in /backend/

<h2>REST endpoints</h2>
GET - '/activites/'
Gets all activities

POST - '/activities/add' Creates activity with current date <br>
Duration is in minutes. Body should be in format <br>
```
{
username: [STRING],
description: [STRING],
duration: [INT],
date: [DATE]
}
```

GET - '/activities/:id'
Get activity by id

DELETE - '/activity/:id'
Delete activity by id

POST - '/activity/update/:id' Updates activity by id <br>
Duration is in minutes. Body format should be
```
{
username: [STRING],
description: [STRING],
duration: [INT],
date: [DATE]
}
```

GET - '/activity/user/:username' Gets activities by username

GET - '/users/' Gets all users

POST - '/users/add' Creates user. <br>
Body format should be
```
{
username: [STRING]
}
```

<h2>Pictures</h2>
<img src=kuva1.png>

<img src=kuva2.png>

