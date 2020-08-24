"use strict";
//* fs.readFileSync(path[,options])
Object.defineProperty(exports, "__esModule", { value: true });
/*
[
  '10/08/2018',
  'Man United',
  'Leicester',
  '2',
  '1',
  'H', //! [5 index] => 'A' or 'H' => Away or Home
  'A Marriner'
]
*/
/*
! create a Date object from a string -> 10/08/2018 -> Date(2020, 7, 10) -> Moth is 0 based like index
*/
//! Inheritance Below
// import { MatchReader } from './inheritance/MatchReader';
// import { MatchResult } from './MatchResult';
// const reader1 = new MatchReader('football.csv');
// reader1.read();
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//* Below is the longer version ==============================
// Create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader= new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   // new ConsoleReport(),
//   new HtmlReport(),
// );
// summary.buildAndPrintReport(matchReader.matches);
//* Below is with Class Static Method ===========================
var summary2 = Summary_1.Summary.htmlReport('Man United');
var matchReader2 = MatchReader_1.MatchReader.fromCsv('Man United');
matchReader2.load();
summary2.buildAndPrintReport(matchReader2.matches);
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// };
// let manUnitedWins = 0;
// for (let match of reader1.data) {
// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     ++manUnitedWins;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     ++manUnitedWins;
//   }
// }
// console.log('mathes ::> ', reader.data);
// console.log('manUnitedWins ::> ', manUnitedWins);
