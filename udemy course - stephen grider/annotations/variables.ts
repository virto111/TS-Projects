let apples: number = 5;
let speed: string = 'fast';
let nothing: undefined = undefined;
let nullish: null = null;
let someDate: Date = new Date();

let colors: string[] = ['red', 'green'];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 30,
};

// Function
let logNumber: ((number) => void) = (i: number) => {
  console.log(i);
}

/*
!!! - If we make the declaration and initialization (assignment) together we dont need 
!!!   to declare a type for primitive values. TS uses [type inference]
*/

//* When to use [annotations]
//* 1) Function that returns the [any] type
const json = '{"x": 12}';
const obj = JSON.parse(json);
//* fixing [any]
const json2 = '{"x": 12}';
const obj2: {x: number} = JSON.parse(json);

//* 2) Delayed initialization
let someVar: string;
someVar = 'string';

//* 3) Variable whose type cannot be infered correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
numberAboveZero = numbers[2];

/* =====================================
* Annotations with Functions and Objects
======================================== */


