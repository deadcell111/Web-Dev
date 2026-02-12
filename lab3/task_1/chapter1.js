//Hello, world!

alert("“I’m JavaScript!”.")

//Variables
let admin, name;
name = "Jhon";
name = admin;
alert(admin);

let planet = "Earth";
let current_user = "Jhon";

/*Use UPPER_CASE for "hard-coded" constants known before execution (e.g., BIRTHDAY).

Use camelCase for runtime constants—values that remain unchanged during execution but are calculated while the code is running (e.g., age).

In short:

const COLOR_RED: Known at coding time.

const age: Calculated at runtime.*/

//Data types
/*
hello I
hello name
hello Ilya
*/

//Interaction: alert, prompt, confirm

let wyn = prompt("What is your name?", "")
alert(name);

//Basic operators, maths
//c = 2; d = 1; a = 2; b = 2;

//x = 5, a = 4;

/*
10
-1
1
2
6
9px
$45
2
NaN
- 9 5
-14
1
NaN
-2
*/

//if a = +a and b = +b

//Comparisons
/*
true
false
true
false
false 
false
*/

//Conditional branching: if, '?'
//yes
let val = prompt('What is the "official" name of JavaScript?', '');
if(val == 'ECMAscript') {
    alert('Right');
} else {
    alert("You don't know? ECMAScript!");
}

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

//Logical operators
alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );

alert(1 && null && 2);

alert( alert(1) && alert(2) );

alert( null || 2 && 3 || 4 );

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//Loops: while and for
let i = 3;

while (i) {
  alert( i-- );
}

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let o = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}
//Functions 

/*No difference!

In both cases, return confirm('Did parents allow you?') 
executes exactly when the if condition is falsy.*/

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let nl = prompt("n?", '');

if (nl < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//Arrow functions, the basics
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

