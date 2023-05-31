/*Fibonacci
First two numbers are 0 and 1 then the others are calculated adding the previous ones
Ejemeplo 3+5 = 8, 5+8 = 13, 8+13= 21 */

function fibonacci(number) {
  const secuenceFib = [0, 1];
  for (let i = 2; i <= number; i++) {
    secuenceFib[i] = secuenceFib[i - 1] + secuenceFib[i - 2];
  }
  return secuenceFib[number];
}
console.log(fibonacci(7));


//Modifying const properties because is COMPLEX DATA TYPE
const fruits = ["apple","pineapple","orange"]
fruits.push("watermelon")
console.log(fruits)