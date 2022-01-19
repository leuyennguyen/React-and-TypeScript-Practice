/* HOW TO IMPROVE THIS CODE SNIPPET

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

// Type Annotation for this code snippet is too long

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);

*/

interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

/*
    const oldCivic still satisfies the condition (having
    summary() function) to be both interface Vehicle and
    interface Reportable 
*/

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

/*
    REUSABILITY
    both const oldCivic and drink are Type Reportable, so
    both can use function printSummary()
*/

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
