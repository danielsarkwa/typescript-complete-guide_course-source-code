const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const items: string[] = [];

const carByMakers: string[][] = [['ford233'], ['corolla'], ['camaro']];

// help with inference when extracting values
const car = carMakers[0];
const car2 = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleLowerCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2021-05-2'];
importantDates.push('2021-05-4');
importantDates.push(new Date());
