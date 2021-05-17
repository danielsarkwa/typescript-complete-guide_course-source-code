// super-class
class Vehicle {
  // color: string;

  // this is called by sub-classes as well
  constructor(public color: string) {
    // this.color = color;
  }

  // can be accessed by sub-classes
  protected honk(): void {
    console.log('beeeepp...');
  }
}

// sub-class
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // super function references the super-class constructor
    //  and the parameters are the superclass parameters
    super(color);
  }

  // can only be accessed by other objects within the objects
  private drive(): void {
    // overiding super-class method
    console.log('voooom voooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(3, 'red');
car.startDrivingProcess();
console.log(car.wheels, car.color);
