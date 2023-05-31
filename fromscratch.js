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


/* Modifying const properties because is COMPLEX DATA TYPE */
const fruits = ["apple","pineapple","orange"]
fruits.push("watermelon")
fruits[0]="mango" 
console.log(fruits)
/*End Class 4*/


/* .LENGTH 🉐*/
/* Property for counting characters */
let pepito = "caramelitotetete"
console.log(pepito.length) 

/* .INCLUDES🉐*/
/* Method for asking if something has something inside*/
console.log(pepito.includes("caramel"))

/* .CONCAT🉐*/
/* Method for adding something or pasting something*/
let saborDelCaramelito = " de Maracuya"
console.log(pepito.concat(saborDelCaramelito))

/* .UPPERCASE .LOWERCASE🉐*/
/* Method for transforming font to Mayus or Minus*/
let lowerLetter = "iM WhiSpeRinG"
console.log(lowerLetter.toLowerCase()) 
let upperLetter = "im scrEaMing"
console.log(upperLetter.toUpperCase()) 

/* .SLICE🉐*/
/*Method used to extract a portion of a string and return a
 new string without modifying the original one*/
let message = "Hello chavaletes how you doing";
console.log(message.slice(1,12));

/*End Class 5*/