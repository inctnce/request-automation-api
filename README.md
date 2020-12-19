# request-automation-api

## Документация

### Запросы 

Адрес API https://spbu-timetable-api.herokuapp.com

#### /auth

##### POST /registration
* Отправляемые данные
```JSON
{
  "name": "<your name>",
  "email": "<your email>",
  "password": "<your password>"
}
```
* Получаемые данные
```JSON
{
"user":{
    "name":"<user name>",
    "email":"<user email>",
    "savedCabinets":[{"id":"<cabinet id>","name":"<cabinet name>"}],
    "savedGroups":[{"id":"<cabinet id>","name":"<cabinet name>"}],
    "savedEducators":[{"id":"<cabinet id>","name":"<cabinet name>"}]
  }
}
```

##### POST /login
```JSON
{
  "email": "<your email>",
  "password": "<your password>"
}
```

##### GET /google
* Получаемые данные
```JSON
"user":{
    "name":"<user name>",
    "email":"<user email>",
    "savedCabinets":[{"id":"<cabinet id>","name":"<cabinet name>"}],
    "savedGroups":[{"id":"<cabinet id>","name":"<cabinet name>"}],
    "savedEducators":[{"id":"<cabinet id>","name":"<cabinet name>"}]
  }
```

##### GET /logout


