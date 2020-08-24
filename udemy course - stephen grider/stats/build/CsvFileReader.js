"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
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
