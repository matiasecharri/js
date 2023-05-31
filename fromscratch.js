//Fibonacci

function fibonacci(number) {
  const fib = [0, 1];

  for (let x = 2; x <= number; x++) {
    fib[x] = fib[x - 1] + fib[x - 2];
  }
  return fib[number];
}

console.log(fibonacci(4));
