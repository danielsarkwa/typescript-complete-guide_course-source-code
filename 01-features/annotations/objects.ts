const todaysWeather = {
  data: new Date(),
  weather: 'sunny',
};

const logWeather = ({ data, weather }: { data: Date; weather: string }) => {
  console.log(data);
  console.log(weather);
};

logWeather(todaysWeather);

// ------
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  // setAge: () { ... }
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
