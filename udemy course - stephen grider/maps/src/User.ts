import faker from 'faker';
import { Mappable } from './CustomMap';

// declare module "uuu" {
//   export = User;
// }

//! Type Definition file will tell the TS Compiler about all js methods...
//* .d.ts files are like Adapter
//* we have to add type definition files manually
//? @types{library name} -> @types/faker

//* rearluy using [default] statements
//! Module can NOT have MUltiple default statements
export default 'red'; //? -> Just as an axample, we don't use this [red]

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

