import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { MatchData } from './inheritance/MatchReader';


export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  static htmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport(),
    );
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}


