# Address Spec API

## Create Address

Endpoint : POST /api/contact/:idContact/address

Request Header:
- X-API-TOKEN : token

Request Body :

```json
    {
        "street": "Jl. Jendral Sudirman",
        "city": "Jakarta",
        "province": "DKI Jakarta",
        "country": "Indonesia",
        "postal_code": "12345"
    }
```

Response Body (Success) :

```json
    {
        "data": {
            "id": 1,
            "street": "Jl. Jendral Sudirman",
            "city": "Jakarta",
            "province": "DKI Jakarta",
            "country": "Indonesia",
            "postal_code": "12345"
        }
    }
```

Response Body (Error) :

```json
    {
        "errors": "street is required"
    }
 ```

## Get Address

Endpoint : GET /api/contact/:idContact/address/:idAddress

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

 ```json
    {
        "data": {
            "id": 1,
            "street": "Jl. Jendral Sudirman",
            "city": "Jakarta",
            "province": "DKI Jakarta",
            "country": "Indonesia",
            "postal_code": "12345"
        }
    }
```

Response Body (Error) :

```json
    {
        "errors": "Invalid token"
    }
```


## Update Address

Endpoint : PUT /api/contact/:idContact/address/:idAddress

Request Header:
- X-API-TOKEN : token

Request Body :

```json
    {
        "street": "Jl. Jendral Sudirman",
        "city": "Jakarta",
        "province": "DKI Jakarta",
        "country": "Indonesia",
        "postal_code": "12345"
    }
```

Response Body (Success) :

```json
    {
        "data": {
            "id": 1,
            "street": "Jl. Jendral Sudirman",
            "city": "Jakarta",
            "province": "DKI Jakarta",
            "country": "Indonesia",
            "postal_code": "12345"
        }
    }
```

Response Body (Error) :

```json
    {
        "errors": "Address not found"
    }
 ```

## Delete Address

Endpoint : DELETE /api/contact/:idContact/address/:idAddress

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

```json
    {
        "data": {
            "id": 1,
            "street": "Jl. Jendral Sudirman",
            "city": "Jakarta",
            "province": "DKI Jakarta",
            "country": "Indonesia",
            "postal_code": "12345"
        }
    }
```

Response Body (Error) :

```json
    {
        "errors": "Address not found"
    }
```

## List Address

Endpoint : GET /api/contact/:idContact/address

Request Header:
- X-API-TOKEN : token

Response Body (Success) :

```json
    {
        "data": [
            {
                "id": 1,
                "street": "Jl. Jendral Sudirman",
                "city": "Jakarta",
                "province": "DKI Jakarta",
                "country": "Indonesia",
                "postal_code": "12345"
            },
            {
                "id": 2,
                "street": "Jl. Jendral Sudirman",
                "city": "Jakarta",
                "province": "DKI Jakarta",
                "country": "Indonesia",
                "postal_code": "12345"
            }
        ]
    }
```

Response Body (Error) :

```json
    {
        "errors": "Invalid token"
    }
```
