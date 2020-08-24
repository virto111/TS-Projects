"use strict";
//* fs.readFileSync(path[,options])
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var manUnitedWins = 0;
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// };
//* Why to use Enum over JS Objects? -> signal to others for related values!
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        ++manUnitedWins;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        ++manUnitedWins;
    }
}
// console.log('mathes ::> ', matches);
console.log('manUnitedWins ::> ', manUnitedWins);
