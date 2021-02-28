## Callbacks

In JavaScript, functions are executed in the sequence they are called, not in the sequence they are defined.

However, sometimes we want a little bit more control over how and when certain functions are called. Callbacks are useful in doing this.

In simplest terms, a callback is **a function passed as an argument to another function**.

Take this code for example:

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

As we can see here, the `myCalculator` function takes in the `myCallback` function as an argument, and uses it to print the calculated sum. 

If we look more closely at the `myCalculator` function, we see that the sum is calculated first, and the callback function is executed second. This particular example isn't too interesting, but the concept is useful if you imagine using it in a situation where one function has to wait for another function.

## Asynchronous

Although the previous callback example was in a synchronous function, the reality is that callbacks are most useful in asynchronous functions.

A really simple and famous example of an asynchronous function is the `setTimeout()` function:

```javascript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

In this example, `myFunction`, the callback, is called after 3000 milliseconds (3 seconds). 

There are more realistic use cases of asynchronous functions.

For example: If you create a function to load an external resource (like a script or a file), you can't (or at least shouldn't) use the content before it is fully loaded.

Let's say you want to display an HTML file in a web page:

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);
```

In this code snippet, the callback to the `getFile()` function is used to display the HTML text only if the request status is 200 (in other words, if the request has succeeded). Otherwise, the callback displays an error.

## Promises

A Promise is an object that links code that produces something and code that consumes it.

The syntax of a promise looks like this:

```javascript
// The code that produces
let myPromise = new Promise(function(myResolve, myReject) {
  myResolve(); // when successful
  myReject();  // when error
});

// The code that consumes
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

A promise object has different results depending on its state:

| State         | Result          |
| ------------- |:---------------:|
| Pending       | Undefined       |
| Fulfilled     | A Result Value  |
| Rejected      | An Error Object |

Here is an example of a promise using the HTML file from the Asynchronous section:

```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.htm");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File Not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

In summary, the first part of the above code returns either `req.response` or `"File Not Found"` depending on if the request succeeds or fails, and the second part of the code displays what was returned by the first part.

## Async-Await

`async` and `await` are keywords that make promises easier to write.

The `async` keyword makes a function return a promise. The `await` keyword makes a function wait for a promise.

Note that the `await` keyword can only be used inside an async function.

Here is an example using the HTML file from the Asynchronous and Promise sections:

```javascript
async function getFile() {
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {myResolve(req.response);}
      else {myReject("File not Found");}
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```

In this example, the promise object is created within the async function, and returns a different response depending on if the request succeeds or fails. The call to change the inner HTML of demo is only executed after the promise is either resolved or rejected.

# Sources

[W3 Schools: JS Async](https://www.w3schools.com/js/js_callback.asp)

[The Modern JS Tutorial: Promises, async/await](https://javascript.info/async)