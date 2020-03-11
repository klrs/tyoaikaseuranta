<h2>Running</h2>
<ol>
<li>replace const uri in backend/server.js with your own mongodb database url</li>
<li>run `npm init`</li>
<li>run `npm start` in /src/</li>
<li>run `npm start` in /backend/</li>
</ol>

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
<img src=https://github.com/klrs/tyoaikaseuranta/blob/master/kuva1.PNG>

<img src=https://github.com/klrs/tyoaikaseuranta/blob/master/kuva2.PNG>

