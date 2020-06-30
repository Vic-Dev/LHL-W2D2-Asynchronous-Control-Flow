// const callback = () => console.log('hi');

// setTimeout(callback, 1000);

// const callback2 = () => console.log('bye');

// const returnId = setInterval(callback2, 1000);

// console.log('What is?', returnId);

// setTimeout(() => {
//   clearInterval(returnId);
// }, 5000);

// console.log('Before call');

// setTimeout(() => console.log('Inside Timeout'), 1000);

// console.log('After call');

// let num = 1;
// console.log('Before call:', num);

// setTimeout(() => {
//   num = 2;
//   console.log('Inside Timeout:', num);
// }, 2000);

// console.log('After call:', num);

/*
 * Sleepsort
 */

const numbers = [900, 13, 27, 300, 3689, 2, 0, 500, 1];

const sleepSort = (nums) => {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
};

sleepSort(numbers);
