let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let noting: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// --------- when to use type annotations ---------
// 1. functions that returns the 'any' type
const resp = '{"x": 23, "y": 23}';
const cordinates: { x: number; y: number } = JSON.parse(resp);

// 2. when we declare a variable on one line and declares it later
let words = ['red', 'green', 'blue'];
// let foundWord;
// let foundWord = false;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. variables that cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
