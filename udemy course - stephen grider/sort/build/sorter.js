"use strict";
// export interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//! VERY IMPORTANT: class Sorter was showing errors for all methods 
//! "referencing" child class methods (this.swap, this.compare)
//! that is because TS "thinks" that Sort class will be instantiated!
//! BUT we will not make insrance from Sorter - Expectation vs Reality
//! We have to tell TS what the reality is.
//! So we have to make Sorter abstract class. Abstract class can't be instantiated
//! BUT local methods will not refer to Child Classes
//! So, we have to make local [compare, swap. length]
//! Abstract Classes might implement REAL and FUTURE methods (childs methods)
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
