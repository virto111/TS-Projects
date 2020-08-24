"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([99, 2, 1, 6, 4, 100]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('dgfheya');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(2);
linkedList.add(5);
linkedList.add(66);
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// const sorter3 = new Sorter(linkedList);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
// console.log('numbersCollection ::> ', sorter.collection);
// console.log('charactersCollection ::> ', sorter2.collection);
linkedList.print();
// class Sorter {
//   constructor(public collection: number[]) {}
//   sort(): void {
//     //? Below destructuring is COOL!
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i -1; j++) {
//         if (this.collection[j] > this.collection[j+1]) {
//           const leftHand = this.collection[j];
//           this.collection[j] = this.collection[j+1];
//           this.collection[j+1] = leftHand;
//         }
//       }
//     }
//   }
// }
// const sorter = new Sorter([10,33,4,7])
