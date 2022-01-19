const add = (a: number, b: number): number => {
    return a + b;
};

const substract = (a: number, b: number) => {
    a - b;
    // no return type => type inference considers that this function returns void
    // TS does not tell that the function lacks of return statement
    /*
const substract = (a: number, b: number): number => {
    a - b;
};
    By adding return type using type annotation, TS will tell if
    the function does not have return statement
    */
};

function divide(a: number, b: number): number {
    return a/b;
};

const multiply = function(a: number, b: number): number {
    return a*b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
/* The above code snippet can be rewritten as:

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

As can be seen, the object name forecast is replaced by {date, weather}, which is
the properties that we want to pull from the object itself
    {date, weather} is the destructuring
    {date: Date, weather: string}: type annotation
These two statements separate from each other separated by the colon :
This is inspired from the ES2015 code snippet below
*/

/*
// ES2015
const logWeather = ({date, weather}) => {
    console.log(date);
    console.log(weather);
};
*/
logWeather(todaysWeather);

