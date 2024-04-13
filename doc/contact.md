# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header:
- X-API-TOKEN : token

Request Body

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "phone": "1234567890"
}
```
Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "phone": "1234567890"
    }
}
```

Response Body (Error) :

```json
{
    "errors": "first_name is required"
}
```

## Get Contact

Endpoint : GET /api/contacts/:id

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "phone": "1234567890",
  }
} 
```

Response Body (Error) :

```json
{
    "errors": "Contact not found"
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header:
- X-API-TOKEN : token

Request Body

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "phone": "1234567890",
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "phone": "1234567890"
  }
}
```

Response Body (Error) :

```json
{
    "errors": "Contact not found"
}
```

## Delete Contact

Endpoint : DELETE /api/contacts/:id

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "message": "Contact deleted successfully"
}
```

Response Body (Error) :

```json
{
    "errors": "Contact not found"
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameters:
- name : string, contact first name or last name, optional
- phone : string, contact phone number, optional
- email : string, contact email, optional,
- page : number, default 1
- size : number, default 10

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "johndoe@gmail.com",
      "phone": "1234567890"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Doe",
      "email": "janedoe@gmail.com",
      "phone": "1234567890"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```
