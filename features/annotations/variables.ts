let apples: number = 5; //: number is type annotation, telling TS that only numbers are assigned to variable apples
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Objet literal
let point: { x: number ; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20};
/*
    const coordinates = JSON.parse(json);
    Since JSON.parse() returns any type, for example coordinates.dsdsdsfdsf is not marked as error
    TS cannot do error checking on type any 
*/

// 2. When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0 ; i < words.length ; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3. variable whose type can't be inferred correctly
// Bad code example
// Find a number > 0 and assign it to variable numberAboveZero
let numbers = [-10, -1, 12];
// let numberAboveZero = false => type inference causing error later
let numberAboveZero: boolean | number = false;
// numberAboveZero may take boolean or number value

for (let i = 0 ; i < numbers.length ; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}   