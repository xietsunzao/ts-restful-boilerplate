# User API Spec

## Register User

Endpoint : POST /api/users


Response Body (Success) :

```json
{
    "username": "user1",
    "password": "password1"
}
```

Response Body (Error) :

```json
{
    "errors": "Username already exists"
}
```
 
## Login user

Endpoint : POST /api/users/login

Request Body

```json
{
    "username": "user1",
    "password": "password1"
}
```

Response Body (Success) :

```json
{
    "username": "user1",
    "password": "password1",
    "token": "eyJhbGsfwer8wer8rwe"
}
```

Response Body (Error) :

```json
{
    "errors": "Invalid username or password"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header

- X-API-TOKEN : token   

Response Body (Success) :

```json
{
    "id": 1,
    "username": "user1"
}
```

Response Body (Error) :

```json
{
    "errors": "Invalid token"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header

- X-API-TOKEN : token

Request Body (Success)

```json
{
    "username": "user2",
    "password": "password2"
}
```

Request Body (Error)

```json
{
    "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header

- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "message": "OK"
}
```

Response Body (Error) :

```json
{
    "errors": "Unauthorized"
}
```

