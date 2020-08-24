//* Refactor #1 - using Abstract Class + Generics
import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8', //! encodeing file flag - we tell what kind of content we expect a [String] NOT [Buffer]
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    .map(this.mapRow);
  }
}

//! Backup - Origin
// import fs from 'fs';
// import { dateStringToDate } from './utils';
// import { MatchResult } from './MatchResult';

// type MatchData = [Date, string, string, number, number, MatchResult, string];

// export class CsvFileReader {
//   data: MatchData[] = [];

//   constructor(public fileName: string) {}

//   read(): void {
//     this.data = fs.readFileSync(this.fileName, {
//       encoding: 'utf-8', //! encodeing file flag - we tell what kind of content we expect a [String] NOT [Buffer]
//     })
//     .split('\n')
//     .map((row: string): string[] => {
//       return row.split(',');
//     })
//     .map((row: string[]): MatchData => {
//       return [
//         dateStringToDate(row[0]),
//         row[1],
//         row[2],
//         parseInt(row[3]),
//         parseInt(row[4]),
//         row[5] as MatchResult, //* Type Assertion: row[5] is a String, BUT we assert TS that this string is of type MatchResult Enum
//         row[6],
//       ];
//     });
//   }
// }

