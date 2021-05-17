// generics with functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

printAnything<number>([2, 3, 5, 6, 7]);
printAnything<string>(['dfdfd', 'dfsdf']);

// generics constraints
class Car {
  print() {
    console.log('i am a car');
  }
}

class House {
  print() {
    console.log('i am a house');
  }
}

// a generic contraint tells typescript we promise an agument will have an object
interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print;
  }
}

// printHouseOrCar([1, 2, 4, 5, 6]); ---> this will lead to an error since it does not satisfy the Printable interface
printHouseOrCar<Car>([new Car(), new Car()]);
printHouseOrCar<House>([new House(), new House()]);
