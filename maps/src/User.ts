// npm install faker 
// DOCUMENTATION: index.d.ts or npmjs.com -> faker
import faker from 'faker'; 
import { Mappable } from './CustomMap';


export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        /*
            Since location is an object in class User, direct 
            initialization or assignment will not work
                this.location is undefined
                this.location.lat = 12; ==> ERROR
            Therefore, we must first initialize the location object,
            and also initialize its properties (lat and lng)
            ==========================================================
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
            both lines of code above does not work since latitude() and
            longitude() methods return string, not number as we define
            (check type definition file for more info)
            ==> we must convert the return type into number and assign to
            lat and lng properties of location object
        */
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}