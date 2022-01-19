class Vehicle {
    /* Any inherited method child class (Car) must have the same 
    modifier as its parent class's method

    public drive(): void {
        console.log('chugga chugga');
    }

    ==> the method drive() in class Vehicle has modifier public, while
    the method drive() in class Car is private => error
    */

    // color: string = 'red'; => better use constructor

    constructor(public color: string) {
        
    }
    /*
        the above code snippet can be written as:
            public color: string;
            constructor(color: string) {
                this.color = color;
            }
    */
    
    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk();
// This will give error since any method with protected modifier can only
// be accessed within the class or in its child classes

class Car extends Vehicle {
    /*
        - If the child class has no constructor, TS will automatically call
        the parent class's constructor as an instance of child class is created
        - If the child class has constructor, its constructor must call the 
        parent class's constructor by method super()
    */
    constructor(public wheels: number, color: string) {
        super(color);
    }
    /*
        Since the color inside class Car's constructor belongs to parent class
        Vehicle, we do not assign modifier. Once we assign modifier, TS will
        reassign or create a new field in car of color
    */

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}
const car = new Car(4, 'blue');
car.startDrivingProcess();

