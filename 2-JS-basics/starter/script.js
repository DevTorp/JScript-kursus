/***********************
Variabels and Data types

*/
/*
var firstName = 'John';
var lastName = 'Andersen';
var age = 45;
var job;
job = 'Teacher';
var job2;

//Konsol visning
console.log(firstName + ' ' + lastName + ' ' + age);
console.log(job);
console.log(job2);
*/
/***********************
Variabels mutations and typos

*/

/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*
var  firstName = 'John';
var age = 56;

console.log(firstName + ' ' + age);

var job, ismarriage;

ismarriage = false;

alert(firstName);

var lastName = prompt('What is hes lastname of john');

console.log(firstName + ' ' + lastName);
*/

/*
//John
var massJohn = 78;
var heightJohn = 1.96;

//Mark
var massMark = 98;
var heightMark = 1.94;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/
//Bmi Calculator
/*
var massYour = prompt('Hvad er din vægt?');
var heightYour = prompt('Hvad er din højde?');


var BMIdin = massYour / (heightYour * heightYour);

//console.log(BMIdin);
var BMIdin = alert('Din bmi er' + ' ' + BMIdin);
*/

// iff else statment
/*
var firstName = 'John';
var civilStatus;
var status = prompt('Hvad er din status');



if (status === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log('John is single!');
} 
*/
/*
var firstName = 'john';
var age = 12;

if (age < 13) {
    console.log(firstName + ' is a boy');
    } else if (age >= 13 && age < 20){
        console.log(firstName + ' is a teenager');
    } else {
        console.log(firstName + ' is a man');
    }
*/

//the tenary operator
/*
var firstName = 'john'
var age = 15;

age >= 16 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');
*/

// challange

var johnGame = (89 + 120 + 103) /3;
var mikeGame = (116 + 94 + 123) /3;
var maryGame = (97 + 134 + 105) /3;
// var winner;

console.log(johnGame, mikeGame, maryGame);

switch (winner) {
    case johnGame > mikeGame || maryGame:
    console.log('John winns with the avareage score off' + ' ' + johnGame);
    break;
    case mikeGame > johnGame && maryGame:
    console.log('John' + ' winns with the avareage score off' + ' ' + johnGame);
    break;
    case maryGame > mikeGame && johnGame:
    console.log(' Mary winns with the avareage score off' + ' ' + johnGame);
    break;
    default:
        console.log(' All are even.');
}





