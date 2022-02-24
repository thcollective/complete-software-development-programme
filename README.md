# Asynchronous Programming

## Table of Contents

| No. | Topic                                           |
| :-: | ----------------------------------------------- |
|  1  | [What is Asynchronous?](#what-is-asynchronous)  |
|  2  | [Threads](#threads)                             |
|  3  | [Asynchronous Code Example](#asynchronous-code-example) |
|  4  | [Callback function](#callback-function) |
|  4  | [Callback hell](#callback-hell) |
|  4  | [Promises](#promises) |
|  4  | [Promise Hell](#promise-hell) |
|  4  | [Async await](#async-await) |


# What is Asynchronous?

Javascript is executed from top to bottom. Simple. You type in lines of code. Each line is read and executed. However, this may become an issue if the codebase is huge and it must wait for previous code to complete before running new code. The execution will be slow. This is an unpleasant experience that wastes computer processing power, especially in an era when computers have several processor cores. Why not take advantage of other cores? Welcome to **asynchronous programming**.

# Threads

A thread is basically a single process that a program can use to complete tasks. Each thread can only do a single task at once:

```
Task A --> Task B --> Task C
```

A previous task has to complete before running next task.

In modern era, processors have multiple cores. So we can do multiple things at once. There are programming languages that can support multiple threads to run tasks simultaneously. For example, Java.

However, JavaScript is a single-threaded. [Read more here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts#javascript_is_single-threaded).

In short, after a while. Javascript has managed to developed a new API called [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). The [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) basically allows you to send a task to a separate thread.

# Asynchronous Code Example

Let's start with synchronous code first. When we read Javascript, we tend to read from top to bottom. Because this is how we human read. But computers don't always read from top to bottom. They can skip some part and come back to them later.

Take a look at the code below.

```js
// Sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

console.log("Start");
sleep(1000)
console.log("Done");
console.log("End");
```

When we run this:
```
Start
// waits one second
Done
End
```
There is a one second delay after it outputs "Start". Because we're calling `sleep(1000)`, the function call delayed our execution by 1 second.

Now let's try running the code below.

```js
console.log("Start");
setTimeout(() => {
  console.log("Done");
}, 1000);
console.log("End");
```

You'd expect it to log something like this right?

```
Start
// waits one second
Done
End
```

Let's run this and this is what we get.

```
Start
End
// waits one second
Done
```

What is going on here? Why is "End" displayed first even though it comes after the `setTimeout`.

Also, do keep in mind JavaScript is single-threaded. Meaning that it has one main thread. So everything is executed from this main thread.

To answer the question, let's understand how JavaScript executes it's code. When we run this code, the first thing it will do is `console.log("Start")`. Then it goes to `setTimeout` function and `setTimeout` is an asynchronous function so it gets transfered to the web worker thread. The worker thread calls the `setTimeout` function and waits for 1 second. However on the main thread, the execution continues. That's why we see `console.log("End")` before the `console.log("Done")`. Now once the worker thread has finished it's job, it transfers the code back to the main thread. The main thread continues, and finally we see  `console.log("Done")`.

Take a look at this diagram.

![The Worker Thread](./assets/worker-thread.png "The Worker Thread")

# Callback function

What is a callback? Basically a function that takes another function is considered callback. Believe it or not, the code we just tried is callback function.

```
console.log("Start");
setTimeout(() => {
  console.log("Done");
}, 1000);
console.log("End");
```

Why is this callback function? If you take a look at the syntax very carefully, setTimeout is actually a function.

```
setTimeout()
```

We put another function in the setTimeout function's first parameter and timeout in the second parameter.

When we run the code, first thing it's gonna do is process the setTimeout function then invokes the the outer function (passed in as parameter) to complete some kind of routine or action.

You can think of a callback function as two functions executed one after another. It executes first function then callback/executes another function.

So how can we create a callback function?

```js
function getTodos(callback) {
  let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"]; // Main function's execution
  callback(todos); // Callback
}
```

Take a look the code above. The function last line `callback(todos)` is to invoke another function from the parameter.

When calling this function, we have to pass another function as an argument. Notice the execution is synchronous as it's invoked immediately after processing the main function.

Try calling this code below.

```js
getTodos((todos) => {
  console.log(todos)
});
```

You will get something like this.

```
[ 'Todo 1', 'Todo 2', 'Todo 3', 'hello' ]
```

# Callback Hell

When you pass a function as an argument. It creates callback. Quite simple but imagine this scenario. What if there is another callback inside a callback?

Take a look at our initial code.

```js
function getTodos(callback) {
  let todos = ["Todo 1", "Todo 2", "Todo 3", "hello"];
  callback(todos);
}
```

```js
getTodos((todos) => {
  console.log(todos)
});
```

Now let's add one more callback. Here's what we're trying to do.  
1 - Get all todos  
2 - Process those todos & remove bad words  
3 - Display todos

```js
function getTodos(callback) {
  let todos = ["Todo 1", "Todo 2", "Todo 3", "bad word"];
  callback(todos);
}

function processTodo(todos, callback) {
  let badWords = ["bad word"];
  for (let i = 0; i < todos.length; i++) {
    if (badWords.includes(todos[i])) {
      todos.splice(i, 1);
    }
  }
  callback(todos);
}
```

Now let's call these.

```js
getTodos((todos) => {
  processTodo(todos, (filteredTodos) => {
    console.log(filteredTodos);
  });
});
```

The output

```
[ 'Todo 1', 'Todo 2', 'Todo 3' ] // Profanity removed
```

We successfully completed our steps. First we call a function that returns the todos then we call another function to remove profanity. Finally we display them. But there is a problem with this code. What would your code look like if there are callbacks after callbacks? Welcome to callback hell.

Take a look the code below.

```js
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```
This is known as callback hell. To fix this problem, let's take a look at [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

# Promises

Imagine you ordered something from e-commerce store. You have to wait for it to deliver to your door step. And even if the delivery failed for some reason, you'd still be notified and get a refund. So everyone's happy in the end. This is a real-life analogy for things that's similar to Promises.

1. A "producing-code" that does something and takes time. In this case, a courier service is responsible to process your "order".
2. A "consuming-code" that wants the result of "producing-code". In this case, a customer waiting for their package to arrive.
3. A promise is a special JavaScript object that links the "producing-code" and "consuming-code" together. A promise always return something.

A promise object can be created using this syntax:

```js
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code)
});
```

It has resolve and reject arguments that are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- `resolve(value)` — if the job is finished successfully, with result value.
- `reject(error)` — if an error has occurred, error is the error object.

The executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

The promise object has three states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

```js
let status = false;
let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second
  // if status is true, signal that the job is finished with result done
  // else singal that the job is finished with an error
  setTimeout(() => {
    if (status) resolve("done");
    else reject(new Error("Whoops!"))
  }, 1000);
});
```

That was an example of a successful job (fulfilled) and failed job (rejected) promise. If the status is true, it will end up in “fulfilled” state otherwise "rejected" state.

To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.

### Consumers: then & catch

We now know how we can create promises but let's take a look at how we can "subscribe" or "consume" these promises, so that we can receive the result (fulfilled) or error (rejected). Consuming promises can be registered (subscribed) using methods .then, .catch and .finally.

#### then

The most important, fundamental one is `.then`.

```js
promise.then(function (result) {
  // handle a successful result
});
```

`.then` is a function that runs when the promise is resolved, and receives the result.

```js
let status = true;
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second
  // if status is true, signal that the job is finished with result done
  // else signal that the job is finished with an error
  setTimeout(() => {
    if (status) resolve("done");
    else reject(new Error("Whoops!"));
  }, 1000);
});

// resolve runs in .then
promise.then(
  (result) => console.log(result) // shows "done" after 1 second
);
```

### catch

`.catch` is a function that runs when the promise is rejected, and ended up in error.

If we want to catch errors, we can use `.catch(errorHandlingFunction)`

```js
let status = false;
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second
  // if status is true, signal that the job is finished with result done
  // else signal that the job is finished with an error
  setTimeout(() => {
    if (status) resolve("done");
    else reject(new Error("Whoops!"));
  }, 1000);
});

// reject runs in .catch
promise.catch(
  (error) => console.log(error) // shows "Whoops!" after 1 second
);
```

### Chaining then & catch

We can chain both `.then` and `.catch` as shown in the example below.

```js
let status = true;
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second
  // if status is true, signal that the job is finished with result done
  // else signal that the job is finished with an error
  setTimeout(() => {
    if (status) resolve("done");
    else reject(new Error("Whoops!"));
  }, 1000);
});

// resolve runs in .then
// reject runs in .catch
promise
  .then((result) => console.log(result)) // Shows "done" after 1 seconds.
  .catch((error) => console.log(error)); // doesn't run
```

Now, try changing the `status` variable to `false` and see what you get.

# Promise Hell

# Async await