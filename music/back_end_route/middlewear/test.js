function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(`第一題:${i}`);
    }
  }
}

printPrimes(10);

function isPrime2(num) {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function printPrimes2(num) {
  let i = 2;
  while (i <= num) {
    if (isPrime2(i)) {
      console.log(`第二題:${i}`);
    }
    i++;
  }
}
// printPrimes(10);
printPrimes2(50);

const createNewarray = (arr, fn) => {
  let newARR = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newARR.push(arr[i]);
    }
  }
  console.log(newARR);
};
function greaterThan10(n) {
  return n > 10;
}

createNewarray([10, 20, 30], greaterThan10);

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
Promise.all([promise1, promise2]).then((val) => {
  const sum = val.reduce((num1, num2) => {
    return num1 + num2;
  });
  console.log(sum);
});
