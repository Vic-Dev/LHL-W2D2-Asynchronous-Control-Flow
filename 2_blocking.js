const start = new Date().getTime();

// Do something
for (let i = 0; i < 20000; i++) {
  const date = new Date().getTime();
  console.log(date);
}

const end = new Date().getTime();
const timeElapsed = end - start;
console.log(`It took ${timeElapsed}ms.`);
