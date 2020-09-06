import { UserProps } from './User';


export class Attributes<T> {

  constructor(private data: T) {}
  
  // get(propName: string): number | string {
  // get(propName: string): number | string | undefined {
  //* <K extends keyof T> -> we are setting a constraint, limiting the type of keyes
  //* K -> can only be "name" "age" "id"
  //! Below we define bound methods with Arrow Function in order to preserve [this]
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attts = new Attributes<UserProps>({
  id: 1,
  name: 'Viktor',
  age: 40,
});

const name = attts.get('name');

 //! Two Important Rules:
//* #1 - string can be a type also!
type BestName = 'stephen'; //! we cretae a TYPE out of the string
const printName = (name: BestName) => {};
// printName('John'); => Must be called with 'stephen'
//* #2 in JS all Object properties are strings!
// let colors = {};
// colors[5] = 'red';
// colors['5'] === colors[5];
//! Thats why the KEYS of Object in TS can be TYPES as well

/*
*
* [property] [type] 
* name       string  -> get("name") -> string
* age        number  -> get("age") -> number
* id         string  -> get("id") -> number
! we want to establish a close relationship between string argument 
! and the returned value [property name] -> [retrned type]
*/

