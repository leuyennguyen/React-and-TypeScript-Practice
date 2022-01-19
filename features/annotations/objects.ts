const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    // This is an example of a function being defined inside of an object
    // with the function annotation (using ES2015)
    setAge(age: number): void {
        this.age = age;
    }
};

const { age }: {age: number} = profile;

const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;