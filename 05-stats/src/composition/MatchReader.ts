import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';
import { CsvFileReader } from '../composition/CsvFileRearder';

import { MatchData } from '../MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // this is the type assertion, where we tell typescript to set the variable value to the typed item
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
