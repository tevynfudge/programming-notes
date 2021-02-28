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

## Async-Await

# Sources

[W3 Schools: JS Async](https://www.w3schools.com/js/js_callback.asp)

[The Modern JS Tutorial: Promises, async/await](https://javascript.info/async)