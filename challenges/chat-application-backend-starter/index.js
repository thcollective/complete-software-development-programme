// Imports the framework
const express = require("express");
// Creates an instance
const app = express(); 
// Allow incoming request object as a JSON Oject.
app.use(express.json());
// Mock database
const messages = [
  {
    text: "Hey World",
    createdAt: "2022-01-14T14:07:06.854Z",
    updatedAt: "2022-01-14T14:07:06.854Z",
    id: "0x1",
  },
  {
    title: "Hello World!",
    createdAt: "2022-01-14T14:07:06.854Z",
    updatedAt: "2022-01-14T14:07:06.854Z",
    id: "0x2",
  },
];

/* 
    Retrieve messages. What type of request is needed here?
    Responds all messages in JSON format.
*/

/* 
    Add new message. What type of request is needed here?
    Responds newly added message in JSON format.
*/

/* 
    Update existing message. What type of request is needed here?
    Responds updated message in JSON format. 
    Responds error status if a message is not found.
*/

/* 
    Delete message. What type of request is needed here?
    Responds deleted message in JSON format.
    Responds error status if a message is not found.
*/

// Listen for requests on this port
app.listen(3000, () => {
  console.log("App is now listening on Port 3000");
});
