class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything(['a', 'b', 'c']);
new ArrayOfAnything<string>(['a', 'b', 'c']);

//! Hover over arrStr -> Because of Type Inference TS know that we deal with Strings in this case
//* => [ArrayOfAnything]<string>
const arrStr = new ArrayOfAnything(['a', 'b', 'c']);

//* Genrrics around Functions
function printString() {
  
}
function printNumbers() {

}

function arrOfThings<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

arrOfThings<string>(['', '', '']);

//! Generic Conctraints
class Car {
  print() {
    console.log('I Am a House');
  }
}
class House {
  print() {
    console.log('I Am a House');
  }
}

interface Printable {
  print(): void;
}

//* [T extends Printable]
function printHousesOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printHousesOrCar<Car>([new Car(), new Car()]);


