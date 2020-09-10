/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if (votingAge >= 18) {
    console.log(true);
}else {
    console.log(false);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


 
let beforeVar = 6;
let afterVar = 8;
if ( afterVar === 8) {
    beforeVar = afterVar;
}
console.log(beforeVar);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method



let strToNum = new Number("1999");
console.log(strToNum);




//Task d: Write a function to multiply a*b 


function multiply(a, b) {
   return a * b;
}

console.log(multiply(5,5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function convertedAge(myAge) {
    let dogAge = 7 * myAge;
    console.log(`${dogAge} is your dogs age and my age would be ${myAge}`);
}

convertedAge(36);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

let age = 20;
let weight = 30;

function feeds(age, weight){
if (age >= 1)

if (weight > 15 )
    console.log(weight * 0.02);

else if (weight >= 11 && weight <= 15 ) 
    console.log(weight * 0.03);

else if (weight >= 6 && weight <=10 ) 
    console.log(weight * 0.04);

else if (weight >= 1 && weight <= 5 )
    console.log(weight * 0.05);

else (age < 1 )

if (age >= 0.2 && age <= 0.4 )
    console.log(0.10);

else if (age > 0.4 && age <= 0.7 )
    console.log(0.05);

else if (age > 0.7 && age < 1 )
    console.log(0.04);

}



console.log(feeds(1, 15));









/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computer = Math.random();

function randomChoice() {
    
    if ( computer <= .33) {
        return "rock covers paper, you won!";
    }
    else if ( computer <= .66) {
        return "paper covers rock, you won!";
    }
    else if ( computer >= .67) {
        return "scissor cuts paper, you won!";
    }
}

console.log(randomChoice(computer));



  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

 let convertedMiles = 0.621371;
 let kilometers = 1;

 let miles = kilometers * convertedMiles;

 console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let convertedCentimeters = 2.54;
let inches = 1;

let centimeters = inches * convertedCentimeters;

console.log(`${inches} inches is equal to ${centimeters} centimeters.`)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  


for ( let i = 99; i > 0; i--) {

    console.log(i + " bottles of soda on the wall,");
    console.log(i + " take one down, pass it around, ");
    console.log( ( i - 1) + " bottles of soda,");

    }


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// let grade = 75;  //// you can change this to input the number grade for different results

let grade = Math.floor(Math.random() * 100)

   function grading(grade) {
    

    if ( grade >= 90) {
        return  "A";
    }
    else if ( grade >= 80) {
       return  "B";
    }
    else if ( grade >= 70) {
        return  "C";
    }
    else if ( grade >= 60) {
          return  "D";
    }
    else {
         return  "F";
    } 
 }

console.log(grading(grade));


  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object




