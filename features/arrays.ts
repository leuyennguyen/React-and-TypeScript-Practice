const carMakers = ['ford', 'toyota', 'chevy']; // type inference
//const carMakers: string[] = ['ford', 'toyota', 'chevy']; // type annotation
const dates = [ new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100); => throw error

// Help with built-in functions
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
// Hover the line below => const importantDates: (string, Date)[]
const importantDates = [new Date(), '2030-10-10'];
/*
    above line of code can be rewritten as:
        const importantDates: (Date | string)[] = [];
        importantDates.push('2030-10-10');
        importantDates.push(new Date());
*/