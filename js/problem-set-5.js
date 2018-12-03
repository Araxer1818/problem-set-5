/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

// Gets Height
  while (height > 23 || height < 1 || height % 1 != 0) {
    height = prompt("Please enter an integer from 1 to 23, else you'll be reprompted.");
    height = Number(height);
  }

let a = height;
 
// Starts String
var p = document.getElementById("mario-easy-output");
let str = "<code>";

// Sets Variables
a++;
let y = 2;
let v = a;
let z = v - 2;
let w = v - 2;


while (a >= 2) {
  let x = y;
  z = w;

// Adds Height - 1 Amount of spaces and then height - 2 and etc.
  while (z >= 1) {
    str += '&nbsp;';
    z--;
  }

// Adds 2 # then 3 # and etc. until y = input + 1
  while (x >= 1) {
    str += '#';
    x--;
  }

  a--;
  y++;
  w--;
  str += "<br/>";

}

// Prints Code
str += "</code>";
p.innerHTML = str;
console.log(typeof height);

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  // \u00A0 = Centers effect

// Gets Height
  while (height > 23 || height < 1 || height % 1 != 0) {
    height = prompt("Please enter an integer from 1 to 23, else you'll be reprompted.");
    // convert height to number
    // make sure it is an integer
    height = Number(height);
  }


  let a = height;

  var p = document.getElementById("mario-hard-output");
  p.innerHTML = '';
  let str = "<code>";

// Varibles
  a++;
  let y = 2;
  let v = a;
  let z = v - 2;
  let w = v - 2;

// repeats until height = number of rows
while (a >= 2) {
  let x = y;
  z = w;

// Adds x amount of spaces and less and less for every new row
  while (z >= 1) {
    str += '&nbsp;';
    z--;
  }

// Adds # as Necessary
  while (x >= 1) {
    str += '#';
    x--;
  }

// Always add 2 spaces
  str += '&nbsp;&nbsp;';

//Adds # as necessary
  x = y;
  while (x >= 1) {
    str += '#';
    x--;
}

//Change varibles
  a--;
  y++;
  w--;
  str += "<br/>";

}
//prints Code
  str += "</code>";
  p.innerHTML = str;
  console.log(typeof height);

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55.
 * Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

// Getting the Number
while (card % 1 != 0 || card.length >= 17 || card.length < 13 || card.length == 14) {
  card = prompt("Enter a Credit Card Number.");
}

let str = "";
var p = document.getElementById("credit-output");
p.innerHTML = '';
let a = card;
let b = [];

//Organizing Each Digit in the Card into an Array
let i = 10;
let q = 10;
while (i < a * 10) {
  let x = a % q;
  q = q / 10;
  x = x / q;
  b.push(Math.floor(x));
  q = q * 100;
  i = i * 10;
}

// Separating the array Starting with the second last number
let d = b.filter((element, index) => {
  return index % 2 === 0;
})

let c = b.filter((element, index) => {
  return index % 2 !== 0;
})

// Pushing everything into another array while muliplying one the the arrays by 2 as necessary
let e = [];
let f = [];

for (i = 0; i < c.length; i++) {
  e.push(c[i] * 2);
}

for (i = 0; i < d.length; i++) {
  f.push(d[i]);
}

let h = [];

i = 10;
q = 0;

// Separating the Digits in the miltiplied Array
while (q < e.length) {
  x = e[q] % i;
  i = i/10;
  x = x/i;
  if (x != 0) {
    h.push(x);
  }
  if (e[q] > 9) {
    i = 100
    x = e[q] % i;
    i = i/10;
    x = Math.floor(x/i);
    h.push(x);
  }
  q++;
  i = 10;
}

// Random Variables I didn't Use also adding every digits
let v = 0;
let m = 0;
q = 0;
while (q < f.length) {
  v = f[q] + v;
  q++;
}

q = 0;
while (q < h.length) {
  m = h[q] + m;
  q++;
}

let g = m + v;

// Checking the first 2 digits of the credit card
var id1 = b[b.length - 1];
var id2 = b[b.length - 2];

// Images
var imgv = document.createElement("img");
var imgm = document.createElement("img");
var imga = document.createElement("img");
var img = document.createElement("img");
imgv.src = "./images/visa.png";
imgm.src = "./images/mastercard.png";
imga.src = "./images/amex.png";
img.src = "./images/invalid.png";

//Checking if Credit Card is Valid
if (g % 10 == 0) {
  if (id1 == 4 && id1 % 1 == 0 && id2 % 1 == 0 && (a.length == 16 || a.length == 13)) {
    str += "Visa." + "<br/>";
    k = 1;
  } else if (id1 == 5 && id2 >= 1 && id2 <= 5 && id1 % 1 == 0 && id2 % 1 == 0 && a.length == 16) {
    str += "Master Card." + "<br/>";
    k = 2;
  } else if (id1 == 3 && id1 % 1 == 0 && id2 % 1 == 0 && (id2 == 4 || id2 == 7) && a.length == 15) {
    str += "American Express." + "<br/>";
    k = 3;
  } else {
    str += "Invalid." + "<br/>";
    k = 4;
  }
} else {
  str += "Invalid." + "<br/>";
  k = 4;
}

// Displaying Text
card = Number(card);
p.innerHTML = str;

//Displaying Images
if (k == 1) {
  p.appendChild(imgv);
} else if (k == 2) {
  p.appendChild(imgm);
} else if (k == 3) {
  p.appendChild(imga);
} else if (k == 4) {
  p.appendChild(img);
}
// 4111111111111111

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

var p = document.getElementById("guess-output");
let str = "<code>";
let a = 1;
let b = 0;

// gets the Guess
let target = Math.floor(Math.random() * (1000 - 1) + 1);
console.log(target);
let guess = prompt("Try and guess the number from 1 to 1000. Only Integers are Accepted.");
let counter = 0;
if (guess > 1000 || guess < 1 || guess % 1 != 0) {
  guess = prompt("Guess the number from 1 to 1000. Integers ONLY.");
    while (guess > 1000 || guess < 1 || guess % 1 != 0) {
      guess = prompt("Guess the number from 1 to 1000. I SAID INTEGERS ONLY.");
    }
}

// Loops until Number is guessed
  while (guess != target) {
    if (guess > target && guess <= 1000 && guess >= 1 && guess % 1 == 0) {
      counter++;
      b = guess;
      guess = prompt('Try and guess the number from 1 to 1000. Likewise only integers are accepted. You should try and guess lower. Your most recent accepted guess was ' + b + '.');
      a = 1;
    } else if (guess < target && guess <= 1000 && guess >= 1 && guess % 1 == 0) {
      counter++;
      b = guess;
      guess = prompt('Try and guess the number from 1 to 1000. Likewise only integers are accepted. You should try and guess higher. Your most recent accepted guess was ' + b + '.');
      a = 2;
    } else if (a == 1 && (guess > 1000 || guess < 1 || guess % 1 != 0)) {
      guess = prompt('Try and guess the number from 1 to 1000. Again only Integers. You should try and guess lower. Your most recent accepted guess was ' + b + '.');
    } else if (a == 2 && (guess > 1000 || guess < 1 || guess % 1 != 0)) {
      guess = prompt('Try and guess the number from 1 to 1000. Again only Integers. You should try and guess higher. Your most recent accepted guess was ' + b + '.');
    }
  }

// Prints Answer
counter++;
str += "Congratulations, you have guess the target number in " + counter + " chances. As guessed, the target number was " + target + ".";
str += "</code>";

p.innerHTML = str;
console.log(a);



  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

windspeed = 0;
var p = document.getElementById("hurricane-output");
let str = "";

// Gets Input
while (windspeed < 0 || windspeed % 1 != 0 || windspeed == false) {
    windspeed = prompt("Please enter a Windspeed. Only Non-Negative Integers are Accepted.");
    if (windspeed == true || windspeed === 0) {
      break;
    }
}

// Calculates Category
if (windspeed >= 157) {
  str += "Category 5 Hurricane.";
} else if (windspeed <= 156 && windspeed >= 130) {
  str += "Category 4 Hurricane.";
} else if (windspeed <= 129 && windspeed >= 111) {
  str += "Category 3 Hurricane.";
} else if (windspeed <= 110 && windspeed >= 96) {
  str += "Category 2 Hurricane.";
} else if (windspeed <= 95 && windspeed >= 74) {
  str += "Category 1 Hurricane.";
} else if (windspeed <= 73 && windspeed >= 39) {
  str += "Tropical Storm.";
} else {
  str += "The skies are calm...";
}

//Prints Answer
windspeed = Number(windspeed);
p.innerHTML = str;


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  let countArray = [];
  let count;

//Function to Count the number of Decimals
  function countDecimals(input) {
    if (input % 1 != 0) {
      countArray = input.split(".");
      count = countArray[1].length;
      return count;
    } else {
      return 0;
    }
  }

  var p = document.getElementById("gymnastics-output");
  let score;
  let i = 1;
  let str = "";


  score = prompt("Please enter score number " + i + " out of 6. Only Real numbers between 0 and 10 rounded to the nearest tenth are accepted.");

loop1:
// Prompts until 6 guesses are inputed
  while (scores.length < 6) {
loop2:
// Checks if the answer is 0 or null/undefined
    if (score || score === '0') {
loop3:
// Check if number/score is within range
      if (score <= 10.0 && score >= 0.0) {
loop4:
// Checks if Decimal count is greater than 2 and goes back to ask for new input
        if (countDecimals(score) >= 2) {
          break loop3;
          }
      score = Number(score);
      scores.push(score);
      i++;
loop5:
//Breaks if 6 Guesses have already been Submitted
      if (i == 7) {
        break;
      }
    }
// Reprompts as necessary
      score = prompt("Please enter score number " + i + " out of 6. Only Real numbers between 0 and 10 rounded to the nearest tenth are accepted.");
    } else {
      score = prompt("Please enter score number " + i + " out of 6. Again only Real numbers between 0 and 10 rounded to the nearest tenth are accepted.");
    }
  }

// Varibles and Duplicates Array
  let c = 0;
  i = 0;
  let a = scores.slice(0);

// Organizing Numbers Function
  function sortNumbers(a,b) {
        return a - b;
    }

// Removes Highest and lowest and Adds the rest of the Numbers
  a.sort(sortNumbers);
  let e = a[0];
  let f = a[5];
  a.shift();
  a.pop();

  while (i < a.length) {
    c = a[i] + c;
    i++;
  }

// Averages and Prints Necessary
  total = (c / 4).toFixed(2);
  if (e > f) {
    str += 'Discarded: ' + f + ", " + e + "<br/>" + "Score: " + total;
  } else {
    str += 'Discarded: ' + e + ", " + f + "<br/>" + "Score: " + total;
  }

  p.innerHTML = str;

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

//Count Decimal Function
  function countDecimals(input) {
    if (input % 1 != 0) {
      countArray = input.split(".");
      count = countArray[1].length;
      return count;
    } else {
      return 0;
    }
  }
// Varibles
var p = document.getElementById("report-card-output");
let str = "";
let homeworkGrade;
let quizGrade;
let testGrade;

Homework:
//Caculates Homework Grades as necessary
homeworkGrade = prompt("Enter as many homework grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to Quiz grades.");

  while (homeworkGrade != -1) {
    if (homeworkGrade <= 100.0 && homeworkGrade >= 0 && countDecimals(homeworkGrade) < 2 && (homeworkGrade || homeworkGrade === 0)) {
      homeworkGrade = Number(homeworkGrade);
      homeworks++;
      homeworkTotal = homeworkTotal + homeworkGrade;
      homeworkGrade = prompt("Enter as many homework grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to Quiz grades.");
    } else {
      homeworkGrade = prompt("Either you didn't follow the limitations or you entered a illegitimate grade. Enter another grade. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to Quiz grades.");
    }
  }

Quiz:
// Calculate Quizes as necessary
quizGrade = prompt("Enter as many quiz grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to Test grades.");

while (quizGrade != -1) {
  if (quizGrade <= 100.0 && quizGrade >= 0 && countDecimals(quizGrade) < 2 && (quizGrade || quizGrade === 0)) {
    quizGrade = Number(quizGrade);
    quizzes++;
    quizTotal = quizTotal + quizGrade;
    quizGrade = prompt("Enter as many quiz grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to test grades.");
  } else {
    quizGrade = prompt("Either you didn't follow the limitations or you entered a illegitimate grade. Enter another grade. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to proceed to test grades.");
  }
}

Test:
// Calculates Tests Grades as necessary
testGrade = prompt("Enter as many test grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to calculate total average grade.");

while (testGrade != -1) {
  if (testGrade <= 100.0 && testGrade >= 0 && countDecimals(testGrade) < 2 && (testGrade || testGrade === 0)) {
    testGrade = Number(testGrade);
    tests++;
    testTotal = testTotal + testGrade;
    testGrade = prompt("Enter as many test grades as you like. Enter them one at a time or they'll not be computed. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to calculate total average grade.");
  } else {
    testGrade = prompt("Either you didn't follow the limitations or you entered a illegitimate grade. Enter another grade. Only real numbered grades from 0 - 100 rounded to the nearest tenth will be accepted. Enter a -1 to calculate total average grade.");
  }
}

// Claculates all the grades as Necessary
let testAvg = ((testTotal / tests)).toFixed(2);
let testFinal = testAvg * 6;
let quizAvg = ((quizTotal / quizzes)).toFixed(2);
let quizFinal = quizAvg * 3;
let homeworkAvg = ((homeworkTotal / homeworks)).toFixed(2);
let homeworkFinal = homeworkAvg * 1;
let total = ((testFinal + quizFinal + homeworkFinal)).toFixed(2);
let grade = (total / 10).toFixed(2);

//Prints
str += "Tests: " + testAvg + "<br/>" + "Quizzes: " + quizAvg + "<br/>" + "Homework: " + homeworkAvg + "<br/>" + "Grade: " + grade;
p.innerHTML = str;

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
