interface Vehicle {
  name?: string;
  year?: number;
  broken?: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: "clive22",
  year: 2000,
  broken: true,
  summary(): string {
    return "This is a summary function";
  },
};

// here, the function is a stand-alone block that depends on the interrface 'Vehicle'
//  it works with any object that has the type of 'Vehicle' specifically
//  this is polymorphism being applied
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// ----------------
interface Reportable {
  summary(): string;
}

const newCivic = {
  name: "clive22",
  year: 2000,
  broken: true,
  summary(): string {
    return "This is a summary function";
  },
};

const drink = {
  color: "brown",
  carbornated: "true",
  sugar: 40,
  summary(): string {
    return "This is a summary function";
  },
};

// here, the function is a stand-alone block that depends on the 'Reportable' interface
//  it works with any object that has the type of 'Reportable'
//  this senario is when generics comes to play, when different objects with their own distinct types have similar methods/types
//  this is polymorphism being applied
const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(newCivic);
printVehicle(drink);
