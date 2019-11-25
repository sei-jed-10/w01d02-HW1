# Javascript Homework Week1 Homework1

## Assignment Operator

#### Exercise 1:
Without running the following code, try to determine:
```js
let a = 1;
let b = 'bongos';
let c = true;
a = b;
b = c;
c = a;
```

#### Your solution here:
- What is `a`?
a = b;
```
a is ...
a = 'bongos'; 
```
- What is `b`?
b = c;
```
b is ...
true;
```
- What is `c`?
```c = a;
c = 'bongos';
```

#### Exercise 2:
Output a console log `The sum of 5 and 10 is 15` where the values for 5 and 10 are saved to variables, and where 15 comes from those variables being summed.
```js
const num1 = 5;
const num2 = 10;
```


var num1 = 5;
var num2 = 10;


res = num1 + num2;
console.log("The sum of 5 and 10 is " + res);






#### Your solution here:
 How can we make `num3` equal to the sum of `num1` and `num2`?
```js


var num1 = 5;
var num2 = 10;
let num3 = num1 + num2;

res = num3 ;
console.log("num3 equal " + res);






// your solution here
```

#### Exercise 3:
Use variables `num1`, `num2` and `num3` to fill in the `console.log()` to complete the sentence: 

>The sum of 5 and 10 is 15

#### Your solution here:
```js
// your solution here 
console.log("The sum of 5 and 10 is 15" + res)
```


## Comparisons
#### Exercise 1:
By just looking at the following expressions, determine in your mind whether or not each will evaluate to true or false
```
a) 999 > 999
b) 999 === 999 
c) 999 !== 999
d) -5 >= -4
e) 100 <= -100
f) 20 + 5 < 5 
g) 81 / 9 === 9
h) 9 !== 8 + 1
```
#### Your solution here:
 Write `true` or `false` based on the list above
```
a) false
b) true
c) false
d) false
e) false
f) false
g) true
h) false
```

## Data Types and Variables
#### Exercise 1:
1. Creat a variable called bill and assign it to 10.25 + 3.99 + 7.15 (let JavaScript do the calculation)
2. Create a vairable called tip and assign it to multiplying bill by 15% tip rate.
3. Add the bill and tip together and store it into a variable called total.
4. Print the total to the JavaScript console

#### Your solution here:
 Write your javascript solution below
```js

var x= 10.25 ;
var y= 3.99 ;
var z= 7.15 ;
var I= 0.15 ;

bill=  x + y + z ;

console.log("Sum of bill is " +bill);


tip= bill * I;

console.log(" Tip is " +tip);

total= bill * tip ;

console.log(" Total is" +total);
// your answer here
```

#### Exercise 2:
Use the adjective variables below to fill in the blanks and complete the following message.<br/>
"Success is no accident. It is _________, _________, _________, _________, _________ and most of all, _________ of what you are doing or learning to do."

1. Declare a Quotes variable
2. Use the adjective1, adjective2, adjective3, adjective4 adjective5 and adjective6 variables to set the Quotes variable to the message:
"Success is no accident. It is Hard Work, Perseverance, Learning, Studying, Sacrifice and most of all, Love of what you are doing or learning to do."

```

var adjective1 = "Hard Work";
var adjective2 = "Perseverance";
var adjective3 = "Learning";
var adjective4 = "Studying";
var adjective5 = "Sacrifice";
var adjective6 = "Love";
```
Assign the resulting string to a variable called Quotes

#### Your solution here:
 Write your javascript solution below
```js
// your answer here
```


 





const adjective1 = 'Hard Work';
const adjective2 = 'Perseverance';
const adjective3 = 'Learning';
const adjective4 = 'Studying';
const adjective5 = 'Sacrifice';
const adjective6 = 'Love';



console.log('it is ' + adjective1 + adjective2  + adjective3  + adjective4 + adjective5 +'and most of all ' + adjective6);




   
   
   
  



#### Exercise 3:
Here is a message:<br/>
"Hi, my name is Sara. I love cats. In my spare time, I like to watch movies"
1. Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby)
2. Use your variables and string concatenation to create your own message and store it in an message variable
3. print your message to the JavaScript console.

#### Your solution here:
 Write your javascript solution below
```js
// your answer here
```

## Conditionals

#### Exercise 1:
Write an if...else statement that:
1. prints "even" if the number is an even number
2. prints "odd" if the number is an odd number
Hint: Use the % (modulo) operator to determine if a number is even or odd. 

#### Your solution here:
 Write your javascript solution below
```js
// your answer here
```

#### Exercise2:
Write a series of conditional statements that:
1. Prints "not a group" if musicians is less than or equal to 0 
2. Prints "solo" if musicians is equal to 1
3. Prints "duet" if musicians is equal to 2
4. Prints "trio" if musicians is equal to 3
5. Prints "quartet" if musicians is equal to 4
6. Prints "this is a large group" if musicians is greater than 4
ex If musicians equals 3, then "trio" should be printed to the console.






if(musicians<=0) {
   console.log("not a group " +musicians);
 }

if(musicians === 1) {
   console.log("solo" +musicians);
 }
if(musicians === 2) {
   console.log("duet " +musicians);
 }

 if(musicians === 3) {
   console.log("trio" +musicians);
 }

if(musicians === 4){
  console.log("quartet" +musicians);
}

else{
  console.log("this is a large group" );
  
}


#### Your solution here:
 Write your javascript solution below
```js
// your answer here
```


#### BONUS
1. Research a [loop]
JavaScript loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping. JavaScript offers several options to repeatedly run a block of code, including while, do while, for and for-in.
(https://javascript.info/while-for) 
(https://www.w3schools.com/js/js_loop_for.asp)
```js
// your answer here


```
2. Research a [function]
A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

(https://www.w3schools.com/js/js_function_definition.asp) 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
```js
// your answer here
```

# Additional Resources

1.  Variables
    - https://www.youtube.com/watch?v=cXUWYZXru6o (7 min video)
    - https://www.codeanalogies.com/jsconstruction/ (interactive game)

2.  Conditions
    - https://blog.codeanalogies.com/2018/06/18/javascript-booleans-explained-by-going-to-court/ (reading)
    
For more practice read about...
- https://javascript.info/variables
- https://javascript.info/types
- https://javascript.info/operators
- https://javascript.info/comparison
- https://javascript.info/ifelse
- https://javascript.info/logical-operators
