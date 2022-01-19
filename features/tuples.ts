const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// const pepsi = ['brown', true, 40]; => Array
//const pepsi: [string, boolean, number] = ['brown', true, 40]; // => Tuple
/*
    Instead of writing :[string, boolean, number] for each variable
    of each drink, we can use type alias concept
*/
// Type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Same data but different structure
const carSpecs: [number, number] = [400, 3354]; // Tuple
// Object
const carStats = {
    horsePower: 400,
    weight: 3354
};