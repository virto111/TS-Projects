import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([99,2,1,6,4,100]);
const charactersCollection = new CharactersCollection('dgfheya');
const linkedList = new LinkedList();
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