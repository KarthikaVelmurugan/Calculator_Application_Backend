# Calculator Application Backend

**Description : **

The Calculator Application performs the different operation based on the operation type giving during API call , It using express js and running node js environment.

**End point URL :**

POST - http://localhost:3002

**Request Body :**

```

{
    "values":{array of numbers},
    "operationtype":{operation type}

}
```

operation type = 1 - Addition; 2 - Subtraction; 3 - Multiplication; 4 - Division

**Error Handling :**

1. Empty array
2. Single digit
3. Passing other datatype like string
