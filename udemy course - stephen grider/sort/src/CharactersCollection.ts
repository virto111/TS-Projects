import {  Sorter } from './Sorter';

export class CharactersCollection extends Sorter {

  constructor(public data: string) {
    super();
  }
  
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > 
           this.data[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArr = this.data.split('');
    const leftHand = charArr[leftIndex];
    
    charArr[leftIndex] = charArr[rightIndex];
    charArr[rightIndex] = leftHand;

    this.data = charArr.join('');
  }
}