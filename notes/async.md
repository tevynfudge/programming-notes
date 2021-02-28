## Callbacks

In JavaScript, functions are executed in the sequence they are called, not in the sequence they are defined.

However, sometimes we want a little bit more control over how and when certain functions are called. Callbacks are useful in doing this.

In simplest terms, a callback is a function passed as an argument to another function.

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

## Promises

## Async-Await
