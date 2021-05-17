import { CsvFileReader } from './CsvFileRearder';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}
