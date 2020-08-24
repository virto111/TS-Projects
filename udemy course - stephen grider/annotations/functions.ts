const add = (a: number, b: number): number => {
  return a+b;
}

//* below we dont have [:number] return annotation
const add2 = (a: number, b: number) => {
  return a+b;
}

//* [void] and [never]

//? [never] means we never reach the end of this function - rearly used!
const throwError = (message: string): never => {
  throw new Error(message);
}

let forecastObject = {
  date: new Date(),
  wheather: 'sunny',
};

const logWeather = (forcast: {date: Date, wheather: string}) => {
  console.log(forcast.date);
  console.log(forcast.wheather);
};

logWeather(forecastObject);

//? with argument destructuring
const logWeather2 = ({date, wheather}: {date: Date, wheather: string}) => {
  console.log(date);
  console.log(wheather);
};

logWeather2(forecastObject);

//* Functions around Objects
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }
}

//! not only [: number] annotation, BUT [: {age: number}] because of destructuring
const {age}: {age: number} = profile;

const { 
  coords: { lat, lng } 
}: { coords: { lat: number; lng: number; } } = profile;