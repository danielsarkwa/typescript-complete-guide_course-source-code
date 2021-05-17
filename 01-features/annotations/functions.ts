function add(a: number, b: number): number {
  return a + b;
}

const add2 = function (a: number, b: number): number {
  return a + b;
};

const todaysWeather = {
  data: new Date(),
  weather: 'sunny',
};

const logWeather = ({ data, weather }: { data: Date; weather: string }) => {
  console.log(data);
  console.log(weather);
};

logWeather(todaysWeather);
