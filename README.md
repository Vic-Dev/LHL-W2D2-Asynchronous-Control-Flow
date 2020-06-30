# Asynchronous Control Flow

## Overview
- Review
1. Synchronous Control Flow
2. Asynchronous Control Flow
3. Asynchronous Actions
  - setTimeout and setInterval
  - Filesystem functions
  - Events and event handling

## Review:
  - A function
  - Callbacks - how do callbacks work?
  - Higher-order function: a function that takes a function as a callback.
  - Purpose of Callbacks?
    1. Make a function more modular aka make a function able to do more than one thing
    2. Used in asynchronous functions

## 1. Synchronous Control Flow
  - Performs tasks sequentially (ie, one step at a time)
  - Drawback - performance. If you do anything that takes a really long time (like calculating Prime numbers), then it will take forever to get to the next step, because you can only do one thing at a time.
    - This is called "blocking" the code execution.
  - Asynchronous code solves this problem, however it can be a bit trickier to deal with asynchronous code.

## 2. Asynchronous Control Flow
  - Cooking breakfast in the kitchen example
  - Philip Roberts more in depth example

## 3. Asynchronous Actions

### `setTimeout` and `setInterval` builtin functions
  - `setTimeout` allows running a function at a later interval (ie, runs once)
  - `setInterval` allows running a function at a regular interval (ie, runs regularly with the interval between runs)
```js
const callback = () => console.log('hi');

const timer = setTimeout(callback, 1000); // console.logs 'hi' after 1s

const callback2 = () => console.log('bye');

const setInterval = setInterval(callback2, 2000); // console.logs 'bye' every 2s
```

- In what order will the console.logs execute?
```js
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');
```

- What will each console.log output?
```js
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);
```

- Sleepsort function (just for fun)
```js
const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81];

const sleepSort = function(nums) {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
};

sleepSort(numbers);
```

### Filesystem functions
- Node's builtin module `fs` for interacting with the filesystem
```js
// will read my-doc.txt synchronously
const data = fs.readFileSync('./my-doc.txt', { encoding: 'utf8' });
console.log(data);

// will read my-doc.txt asynchronously
fs.readFile('./my-doc.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
```
