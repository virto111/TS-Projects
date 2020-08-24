// export interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }


//! VERY IMPORTANT: class Sorter was showing errors for all methods 
//! "referencing" child class methods (this.swap, this.compare)
//! that is because TS "thinks" that Sort class will be instantiated!
//! BUT we will not make insrance from Sorter - Expectation vs Reality
//! We have to tell TS what the reality is.
//! So we have to make Sorter abstract class. Abstract class can't be instantiated
//! BUT local methods will not refer to Child Classes
//! So, we have to make local [compare, swap. length]
//! Abstract Classes might implement REAL and FUTURE methods (childs methods)
export abstract class Sorter {
  //* Below declare metods which will be declared in future Child Classes
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  
  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i -1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1);
        }
      }
    }
  }
}