# Authentication & Authorization

## Table of Contents

| No. | Topic                                                                                 |
| :-: | ------------------------------------------------------------------------------------- |
|  1  | [What is Authentication?](#what-is-authentication)                                    |
|  2  | [What is Authorization?](#what-is-authorization)                                      |
|  3  | [Authentication vs Authorization](#authentication-vs-authorization)                   |
|  4  | [Authentication Methods](#authentication-methods)                                     |
|  5  | [Passwords](#passwords)                                                               |
|  5  | [Authentication Strategies](#authentication-strategies)                               |
|  6  | [JSON Web Token](#json-web-token)                                                     |
|  7  | [Implementing API Authentication with JWT](#implementing-api-authentication-with-jwt) |
| 7.1 | [MVC Pattern](#mvc-pattern)                                                           |
| 7.2 | [Prerequisites](#prerequisites)                                                       |
| 7.3 | [Setting up a project](#setting-up-a-project)                                         |
| 7.4 | [Mock Database](#mock-database)                                                       |
| 7.5 | [Helper Functions](#helper-functions)                                                 |
| 7.6 | [Register Endpoint](#register-endpoint)                                               |
| 7.7 | [Verifying the JWT](#verifying-the-jwt)                                               |
| 7.8 | [Creating Secure Endpoints](#creating-secure-endpoints)                               |
| 7.9 | [Putting it all together](#putting-it-all-together)                                   |
| 8.0 | [Testing with Insomnia](#testing-with-insomnia)                                       |
| 8.1 | [Conclusion](#conclusion)                                                             |
| 8.2 | [Authentication Solutions](#authentication-solutions)                                 |

## What is Authentication?

Authentication is the process of confirming a user's identity by acquiring credentials and then using those credentials to confirm the user's identity. If the credentials are valid, the authorization process begins. Authentication is done before the authorization process begins.

You were already aware of the authentication procedure because we all go through it on a daily basis, whether at work (logging into your computer) or at home (logging into a website). However, the truth is that most "things" connected to the Internet require you to provide credentials to prove your identity.

## What is Authorization?

The process of granting authenticated users access to resources by determining whether they have system access permissions is known as authorization. Authorization allows you to control access privileges by granting or denying specific licences to an authenticated user.
So, authorization happens after the system authenticates your identity and grants you full access to resources like information, files, databases, funds, locations, and anything else. However, authorization has an impact on your ability to access the system and the extent to which you can do so.

## Authentication vs Authorization

While they sound similar & interchangeably, they are separate processes used to protect an organization from cyber-attacks.

Let's understand this concept with an example. Assume you work in a small company with ten people. Two of them are CEOs, two are managers, and the rest are employees like you. During the day, you'd need an access card to get access to your workplace. That card is used to gain entry to your workplace and contains your sensitive information. This part can be known as Authentication. Similar to how you must enter your username and password to log in to your social media account. During office hours, we know that 10 people are working in this company. All of them have their roles, privileges & responsibilities. Employees have fewer privileges & responsibilities compared to Managers, while CEOs have the highest privileges & responsibilities. Now, this role-based access control can be known as Authorization.

Here's a quick rundown of the distinctions between authentication and authorization:

| **Authentication**                                                                                                                       | **Authorization**                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Checks to see if the users are who they say they are.                                                                                    | Determines what users have and do not have access to.                                                                                      |
| Requests that the user validate their credentials (for example, through passwords, answers to security questions, or facial recognition) | Checks to see if access is permitted by policies and rules.                                                                                |
| Typically performed prior to authorization.                                                                                              | Typically, this is done after successful authentication.                                                                                   |
| In general, information is transmitted via an ID Token.                                                                                  | In general, information is transmitted via an Access Token.                                                                                |
| The OpenID Connect (OIDC) protocol is generally in charge.                                                                               | The OAuth 2.0 framework governs the overall framework.                                                                                     |
| Employees in a company, for example, are required to authenticate via the network before accessing their company email.                  | For instance, once an employee has successfully authenticated, the system determines what information the employee is permitted to access. |

# Authentication Methods

[5 Authentication Methods that Can Prevent the Next Breach](https://www.idrnd.ai/5-authentication-methods-that-can-prevent-the-next-breach/)

# Passwords

Let's talk about passwords. The identity of a user rely on password. If this gets leaked/hacked, it's over.

Twitter for example, when you register as a new user on Twitter, you need to create a password. Twitter is then going to store your information in their database. Each time you log in, Twitter checks if the provided password matches with your password that's stored in the database. When you reset the password, the password gets updated in the database as well. Does this mean Twitter know your password? The answer is NO! Why? Because it's against their user's agreement. And the password is not stored in a text format. Nobody knows your password except you. Take a look at the image below to see how passwords are stored in the database.
![Hashed password](./assets/hashed-password.jpeg "Hashed password")

Now that is a long password. But, that's not exactly the user's password. That text is actually `123456` but it was hashed using `bcrypt` in the database. Then you might ask, how is `123456` equals to that hashed text? Go to this [site](https://bcrypt-generator.com/) and compare the provided string below with `123456`.

```
$2b$10$4gq/MfDsps0C6GQJwaHob.sIHjyikjS6Wiw9p4da/Om4dzENPPxFG
```

It will say it's a match.

![Bcrypt password match](./assets/bcrypt-generator-match.jpeg "Bcrypt password match")

## Why hash the passwords

Hashing turns your password into a short string of letters and/or numbers using an encryption algorithm. If an account/database is hacked, the hackers don’t get access to your password. Instead, they just get access to the hashed string created by your password.

Basically, there is a mathematical function behind every hash algorithm. [Here’s a complete rundown of what hashing algorithms are and how they work.](https://cheapsslsecurity.com/blog/decoded-examples-of-how-hashing-algorithms-work/)

What if the password is really long? It would take thousand if not million years to crack the password. Password like `123456` could literally take less than 1 second to crack.

# Authentication Strategies

[Session vs Token Based Authentication](https://sherryhsu.medium.com/session-vs-token-based-authentication-11a6c5ac45e4)  
[Using Session Cookies Vs. JWT for Authentication](https://hackernoon.com/using-session-cookies-vs-jwt-for-authentication-sd2v3vci)

# JSON Web Token

JSON Web Token, in short JWT, pronounced as jot, is a one of the standard way for securely transimitting information between a server and a client as a JSON Object. JWT is usually small because of this it can be sent through HTTP headers. Using JWT is the more recommended method in modern web apps.

A typical JWT looks like this.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2YjMwMTQ3OThjNjRjZTNiN2I2MDYiLCJuYW1lIjoiS2FpeiIsInVzZXJuYW1lIjoia2FpeiIsImVtYWlsIjoia2FpekBrYWl6LmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDEtMThUMTI6MzA6NTcuNzk4WiIsInVwZGF0ZWRBdCI6IjIwMjItMDEtMThUMTI6MzA6NTcuNzk4WiIsIl9fdiI6MCwiaWF0IjoxNjQyNjYxMjk4LCJleHAiOjE2NDI2NzIwOTh9.Wlvl81zgNdpeuHBCgRI9iL_Kk5w3H1uFXR3H6WsUuxA
```

JWT are usually signed rather than encrypted. The token is valid as long as it's signature and expiry date is valid. If you go to jwt.io and verify the token, you can see the contents inside it. As a result, you should never store sensitive information inside a JWT and should take other precautions to prevent JWTs from being intercepted, such as sending JWTs over HTTPS, following best practises, and using only secure and up-to-date libraries.

# Implementing API Authentication with JWT

Every API needs to be secured. Many web applications and APIs use a form of authentication to protect resources and restrict their access only to verified users.

We'll be building a simple todo application. Here's a brief overview of the application.

- The user signs up, and a user account is created.
- The user logs in, and a JSON web token is generated for the user.
- This token is sent by the user when trying to access certain secure routes.
- A token will have expiration date and payload that contains user's information.
- Once the token has been verified, the user is then allowed to access the route.

## MVC Pattern

From this point onwards, we'll be using Model-View-Controller for Node.js projects, commonly known as MVC pattern.

Watch this video to understand MVC pattern.  
https://www.youtube.com/watch?v=Cgvopu9zg8Y  
https://medium.com/@ipenywis/what-is-the-mvc-creating-a-node-js-express-mvc-application-da10625a4eda

## Prerequisites

We will need:

- [Node.js](https://nodejs.org/en/)
- Downloaded [insomnia](https://insomnia.rest/) or [postman](https://www.postman.com/) for testing API endpoints.

## Setting up a project

Let’s start by setting up the project. In your terminal, create a directory for the project:

1. Create a new folder called `todo-app-auth-backend`
2. Navigate to that new directory

Next, initialize a new package.json in that new directory:

```
npm init -y
```

Install the project dependencies:

```
npm install --save bcrypt express jsonwebtoken cors
```

We will need `express` for creating APIs, `bcrypt` for hashing user passwords, `jsonwebtoken` for generating & signing tokens, and `cors` to allow cross-origin requests.

At this point, your project has been initialized and all the dependencies have been installed. Next, we'll be creating APIs.

## Mock Database

Typically, you'd be using a real database to store your data. For this tutorial, we'll keep it simple and just use mock database.

Create a `mock` directory

```
mkdir mock
```

Create a `users.json` file under that new directory and paste the content below.

```json
[
  {
    "name": "User A",
    "email": "usera@gmail.com",
    "password": "$2b$10$4gq/MfDsps0C6GQJwaHob.sIHjyikjS6Wiw9p4da/Om4dzENPPxFG",
    "id": "1"
  },
  {
    "name": "User B",
    "email": "userb@gmail.com",
    "password": "$2b$10$4gq/MfDsps0C6GQJwaHob.sIHjyikjS6Wiw9p4da/Om4dzENPPxFG",
    "id": "2"
  },
  {
    "name": "User C",
    "email": "userc@gmail.com",
    "password": "$2b$10$4gq/MfDsps0C6GQJwaHob.sIHjyikjS6Wiw9p4da/Om4dzENPPxFG",
    "id": "3"
  }
]
```

The password fields are hashed version of `123456`.

Next, create a `todos.json` file under that new directory and paste the content below.

```json
[
  {
    "title": "Todo 1 by User A",
    "userId": "1",
    "id": "1"
  },
  {
    "title": "Todo 2 by User A",
    "userId": "1",
    "id": "2"
  },
  {
    "title": "Todo 3 by User A",
    "userId": "1",
    "id": "3"
  },
  {
    "title": "Todo 1 by User B",
    "userId": "2",
    "id": "4"
  },
  {
    "title": "Todo 2 by User B",
    "userId": "2",
    "id": "5"
  },
  {
    "title": "Todo 3 by User B",
    "userId": "2",
    "id": "6"
  },
  {
    "title": "Todo 1 by User C",
    "userId": "3",
    "id": "7"
  },
  {
    "title": "Todo 2 by User C",
    "userId": "3",
    "id": "8"
  },
  {
    "title": "Todo 3 by User C",
    "userId": "3",
    "id": "9"
  }
]
```

Each todos belong to one user. The `userId` field points to the `id` of the user.

## Helper Functions

It's always helpful to have at least one or two helper function so that we don't have to keep repeating the code. Reusability is key to writing good code.

Let's create a `helpers` directory.

Next, create a `hashPassword.js` file under the new directory & paste the content below.

```js
const BCRYPT = require("bcrypt");
const generateHash = async (password) => {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    BCRYPT.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
};

module.exports = generateHash;
```

This function is responsible to hash a text. We can call this function as much as we want, and it will generate a hashed version of a text.

Next create a `comparePassword.js` file under the new directory & paste the content below.

```js
const BCRYPT = require("bcrypt");
const comparePassword = async (hashedPassword, password) => {
  const compare = await new Promise((resolve, reject) => {
    BCRYPT.compare(password, hashedPassword, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });

  return compare;
};

module.exports = comparePassword;
```

This function is responsible to compare a normal text with hashed text. We can call this function as much as we want, and it will return true or false whether a text matches with hashed text.

Next, create a `generateToken.js` file under the new directory & paste the content below.

```js
const JWT = require("jsonwebtoken");
const generateToken = async (user) => {
  // Remove password field
  if (user.password) {
    delete user.password;
  }

  const signedJWT = await new Promise((resolve, reject) => {
    JWT.sign(user, "TOP_SECRET", { expiresIn: "3h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });

  return signedJWT;
};

module.exports = generateToken;
```

This function is responsible to generate a JSON Web Token by encoding user's information. We can call this function as much as we want, and it will return a token.

```js
const signedJWT = await new Promise((resolve, reject) => {
  JWT.sign(user, "TOP_SECRET", { expiresIn: "3h" }, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});
```

Let's try to understand this code. Notice how we used `TOP_SECRET` as our signature secret. This sigature will be used to to sign the token every time it gets generated. Anyone who has this signature can manipulate the token. **Always keep your signature secret secure and long.** Keep in mind that we also set 3 hour as token expiration time, the token will expire and become invalid after that time span.

So now we have all our helpers function in one place. We can use these function to speed up our development.

## Register Endpoint

Let's create a `routes` directory. Then, create a `users.js` file under that directory.

```js
const express = require("express");
const router = express.Router();
const Users = require("../mock/users.json"); // Mock database
const generateHash = require("../helpers/hashPassword.js"); // helper function
const generateToken = require("../helpers/generateToken.js"); // helper function
const comparePassword = require("../helpers/comparePassword.js"); // helper function

// This is where we'll create endpoints

module.exports = router;
```

Next, add handling of a POST request for signup:

```js
router.post("/register", async (req, res) => {
  // Extract user's name, email & password from request payload
  const { name, email, password } = req.body;
  try {
    // Verifying required fields
    if (!name) {
      throw "Name is needed";
    }

    if (!email) {
      throw "Email is needed";
    }

    if (!password) {
      throw "Password is needed";
    }
    // Generate hashed password
    const hashedPassword = await generateHash(password);

    const User = {
      name: name,
      email: email,
      password: hashedPassword, // Storing hashed password instead of raw
      id: new Date().valueOf().toString(), // Generate random id
    };
    // Create & store user in our mock db.
    const Response = Users.push(User);

    // Generate JWT Token
    const Token = await generateToken(User);
    if (!Token) {
      throw "Error generating token.";
    }

    // Respond the token. Client will use this to access protected routes
    res.status(200).json({
      jwt: Token,
    });
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
```

Next, add handling of a POST request for login:

```js
router.post("/login", async (req, res) => {
  // Extract user's email & password from request payload
  const { email, password } = req.body;
  try {
    // Verifying required fields
    if (!email) {
      throw "Email is needed";
    }

    if (!password) {
      throw "Password is needed";
    }

    // Find user in our mock db
    const User = Users.filter((user) => user.email === email)[0];
    if (!User) {
      throw "User doesn't exist.";
    }

    // Compare passwords
    const Result = await comparePassword(User.password, password);
    if (!Result) {
      throw "Password doesn't match.";
    }

    // Generate JWT token
    const Token = await generateToken(User);
    if (!Token) {
      throw "Error generating token.";
    }

    // Respond the token. Client will use this to access protected routes
    res.status(200).json({
      jwt: Token,
    });
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
```

## Verifying the JWT

So now we've handled user signup and login, the next step is allowing users with tokens access to certain secure routes.

Let's add a middleware function. Middleware functions have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. Read more about middleware function [here](https://expressjs.com/en/guide/using-middleware.html).

We will create a middleware function that perform the following tasks.

- Intercept the request.
- Verify if the JWT exist in the client's header.
- If so, verify the token.
- If passed, allow the request. Else, end the request.

Create a `middlewares` directory

```
mkdir middlewares
```

Create a `verifyToken.js` file under that new directory and paste the content below.

```js
const jwt = require("jsonwebtoken");
// Defining the middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    const decoded = jwt.verify(token, "TOP_SECRET");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = verifyToken;
```

This code extracts the JWT from the request header. It then verifies that this token has been signed with the secret or key set during logging in (`TOP_SECRET`). If the token is valid, the user details are passed to the next middleware.

## Creating Secure Endpoints

The goal will be so that only users with a verified token should be able do the follwing tasks:

- See their own todos
- Create todos

Let's go back to our `routes` directory. Create a new `todos.js` file under that directory.

```js
const express = require("express");
const router = express.Router();
const Todos = require("../mock/todos.json"); // Mock database
const verifyToken = require("../middlewares/verifyToken.js"); // Middleware function

// This is where we'll create endpoints

module.exports = router;
```

Next, add handling of a GET request for todos:

```js
// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.get("/", verifyToken, async (req, res) => {
  // We can safely access user's detail here since the middleware function was used to verify user's identity.
  const user = req.user;
  try {
    // Find todos created by user
    const todos = Todos.filter((todo) => todo.userId === user.id);
    // Respond the todos.
    res.status(200).json(todos);
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
```

Next, add handling of a POST request to create todo:

```js
// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.post("/create", verifyToken, async (req, res) => {
  // We can safely access user's detail here since the middleware function was used to verify user's identity.
  const user = req.user;
  // Extract todos's title from request payload
  const { title } = req.body;
  try {
    const todo = {
      title: title,
      userId: user.id, // Attaching user id to todo
      id: new Date().valueOf().toString(), // Generate random id
    };

    Todos.push(todo);
    // Respond the todos.
    res.status(200).json(todo);
  } catch (error) {
    // Catching error to prevent server crashes.
    console.error(error);
    res.status(400).json(error);
  }
});
```

## Putting it all together

So now that we're all done with creating the routes and authentication middleware, we can put everything together.

This is how our folder structure should look like.

Create a `index.js`

Next, add the following code.

```js
const express = require("express");
const cors = require("cors");
const routesUser = require("./routes/users.js");
const routesTodos = require("./routes/todos.js");
const app = express();
// Allow incoming request object as a JSON Oject.
app.use(express.json());
// Allow CORS
app.use(cors());
app.use("/users", routesUser);
app.use("/todos", routesTodos);

// Listen on port 5000
app.listen(5000, () => {
  console.log(`🚀 Listening on port 5000`);
});
```

Start the server with the following command:

```
nodemon index.js
```

If you don't have nodemon installed, install it globally through npm:

```
npm install -g nodemon
```

You will see a `🚀 Listening on port 5000` message. Leave the application running to test it.

This is how our folder structure should look like.  
![Folder structure](./assets/folder-structure.jpeg "Folder structure")

## Testing with Insomnia

Let's test our APIs with Insomnia.

### How to set Authorization header

The JWT is sent by the user to access the secure routes. We can set `Authorization` header as seen in the image below.
![Authorization Headers](./assets/authorization-headers.jpeg "Authorization Headers")

|       Key.        | Value         |
| :---------------: | ------------- |
| **Authorization** | YOUR_JWT_HERE |

### Step 1 - Login as existing user

Login as existing user.

```json
{
  "email": "usera@gmail.com",
  "password": "123456"
}
```

![Login user](./assets/login-user.jpeg "Login user")
It's works. We've received JWT as a response. We can now use this token to access secure routes. Refer [here](#how-to-set-authorization-header) to set authorization header.

### Step 2 - Get todos

We'll have to copy & paste the token from the step 1 in the header to access secure routes (without quotes). Refer [here](#how-to-set-authorization-header) to set authorization header.

![Get todos response](./assets/get-todos-response.jpeg "Get todos response")
We only see todos created by this user. Our API is working well.

### Step 3 - Create todo

Let's create a todo. Don't forget to pass the token in the header. Refer [here](#how-to-set-authorization-header) to set authorization header.

```json
{
  "title": "New todo by User A"
}
```

![POST todo response](./assets/post-todo-response.jpeg "POST todo response")
It works well. Let's try to get todos again and see if our newly created todo was added.

![GET todos response 2](./assets/get-todos-response-2.jpeg "GET todos response 2")
We can see all our todos as well as our newly created todo.

### Step 4 - Register new user

Next, let's test our registration route. We don't have to pass any token to register/login.

```json
{
  "name": "Foo Bar",
  "email": "foobar@gmail.com",
  "password": "barfoo"
}
```

![Register user](./assets/register-user.jpeg "Register user")
It works! Our new user is now registered in the database. We can use the returned token to access secure routes for this user.

### Step 5 - Get todos

Let's get todos with the token from the step 4. Keep in mind that this is a new user. This user should not have any todos. Refer [here](#how-to-set-authorization-header) to set authorization header.

![GET todos by new user response](./assets/get-todos-by-new-user-response.jpeg "GET todos by new user response")
It works! We don't see any todos created under this user.

### Step 6 - Create todos

Create a todo with the token from the step 4. Refer [here](#how-to-set-authorization-header) to set authorization header.

![POST todo by new user response](./assets/post-todo-by-new-user-response.jpeg "POST todo by new user response")
It works! We just created our first todo under the new user.

Let's get todos again and see if our newly created todo was added.
![GET todos by new user response](./assets/get-todos-by-new-user-response-2.jpeg "GET todos by new user response")

Our API is working.

You can also try accessing secure routes, but with an invalid token or no token at all, the request will return an `Unauthorized` error.

## Conclusion

Congratulations! We just created an API Authentication with JWT and tested it with Insomnia.

JSON web token provide a secure way of creating authentication for APIs. An extra layer of security can be added by encrypting all the information within the token, thereby making it even more secure.

Do read these for more in-depth knowledge of JWT:  
https://auth0.com/learn/json-web-tokens/  
https://auth0.com/blog/using-json-web-tokens-as-api-keys/

## Authentication Solutions

Identity is complicated. It's not easy to create full-fledged authentication and authorization system. However, there are many resources and platforms out there that make it easier. If you are one of those people that don't have time to bother with the authentication system or just want to focus on other stuff. You can always use authentication platforms.

Here are some pointers:  
Auth0 - https://auth0.com/why-auth0  
Okta - https://www.okta.com/

https://solutionsreview.com/identity-management/authentication-platforms-best-of-2021-and-beyond-from-solutions-review/
