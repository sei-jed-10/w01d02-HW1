// Javascript Homework Week1 Homework1

// Assignment Operator

// Exercise 1:
// Without running the following code, try to determine:
// let a = 1;
// let b = 'bongos';
// let c = true;
//  a = b; 
//  b = c;
//  c = a;

 a is "bongos"
 b is true
 c is "bongos"
 

// Exercise 2:
// Output a console log `The sum of 5 and 10 is 15` where the values for 5 and 10 are saved to variables, and where 15 comes from those variables being summed.
// const num1 = 5;
// const num2 = 10;

const num3 = num1+num3


// Exercise 3:
// Use variables `num1`, `num2` and `num3` to fill in the `console.log()` to complete the sentence: 
// The sum of 5 and 10 is 15

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`)



// Comparisons
// Exercise 1:
// By just looking at the following expressions, determine in your mind whether or not each will evaluate to true or false
// a) 999 > 999
// b) 999 === 999 
// c) 999 !== 999
// d) -5 >= -4
// e) 100 <= -100
// f) 20 + 5 < 5 
// g) 81 / 9 === 9
// h) 9 !== 8 + 1

a)	false
b)	true
c)	false
d)	false
e)	false
f)	false
g)	true
h) 	false



// Data Types and Variables
//Exercise 1:
// Creat a variable called bill and assign it to 10.25 + 3.99 + 7.15 (let JavaScript do the calculation)
// Create a vairable called tip and assign it to multiplying bill by 15% tip rate.
// Add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
console.log("$"+ total.toFixed(2))



// Exercise 2:
// Use the adjective variables below to fill in the blanks and complete the following message.<br/>
// "Success is no accident. It is _________, _________, _________, _________, _________ and most of all, _________ of what you are doing or learning to do."
// Declare a Quotes variable
// Use the adjective1, adjective2, adjective3, adjective4 adjective5 and adjective6 variables to set the Quotes variable to the message:
// "Success is no accident. It is Hard Work, Perseverance, Learning, Studying, Sacrifice and most of all, Love of what you are doing or learning to do."
// var adjective1 = "Hard Work";
// var adjective2 = "Perseverance";
// var adjective3 = "Learning";
// var adjective4 = "Studying";
// var adjective5 = "Sacrifice";
// var adjective6 = "Love";
// Assign the resulting string to a variable called Quotes

var quotes = "Success is no accident. It is " + adjective1 + ", " + adjective2 + ", " + adjective3 + ", "+ adjective4 +", " + adjective5 +", " +"and most of all, " + adjective6 + " of what you are doing or learning to do.";
console.log(quotes);


// Exercise 3:
// Here is a message:
// "Hi, my name is Sara. I love cats. In my spare time, I like to watch movies"
// Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby)
// Use your variables and string concatenation to create your own message and store it in an message variable
// print your message to the JavaScript console.

var firstName = "Sara";
var interest = "cats";
var hobby = "watch movies";

var message = "Hi, my name is "+ firstName + "." + " I love " + interest + "." +  " In my spare time, I like to "+ hobby + ".";
console.log(message);


// Conditionals
// Exercise 1:
// Write an if...else statement that:
// prints "even" if the number is an even number
// prints "odd" if the number is an odd number
// Hint: Use the % (modulo) operator to determine if a number is even or odd. 

var number =5;

if (number% 2 === 0) {
    console.log("even")
} else {
 console.log("odd")
}


// Exercise2:
// Write a series of conditional statements that:
// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4
// ex If musicians equals 3, then "trio" should be printed to the console.

var musicians = -1;

if(musicians <= 0){
    console.log("not a group");
}else if(musicians === 1){
    console.log("solo");
}else if (musicians === 2){
    console.log("duet");
}else if (musicians === 3){
    console.log("trio");
}else if (musicians === 4){
    console.log("quartet");
}else if (musicians > 4){
    console.log("this is a large group");
    
}

// BONUS
// 1. Research a [loop](https://javascript.info/while-for) so that your condition runs on every number from 0 to 100
//  Fahad Alturkistani solution
for(i=0;i<=100;i++){
    var numberOfMusicians = i;
    if (numberOfMusicians <=0)
      console.log("not a group");
    if (numberOfMusicians == 1)
      console.log("solo");
    if (numberOfMusicians == 2)
      console.log("duet");
    if (numberOfMusicians == 3)
      console.log("trio");
    if (numberOfMusicians == 4)
      console.log("quartet");
    if (numberOfMusicians > 4)
      console.log("This is a large group");
  }

// 2. Research a [function](https://javascript.info/function-basics) so that your condition runs on every number from 0 to whatever number is passed into the function
// Fahad Alturkistani solution
function checkMusicians(runNumber){
    for(i=0;i<=runNumber;i++){
      var numberOfMusicians = i;
      if (numberOfMusicians <=0)
          console.log("not a group");
      if (numberOfMusicians == 1)
          console.log("solo");
      if (numberOfMusicians == 2)
          console.log("duet");
      if (numberOfMusicians == 3)
          console.log("trio");
      if (numberOfMusicians == 4)
          console.log("quartet");
      if (numberOfMusicians > 4)
          console.log("This is a large group");
    }
};