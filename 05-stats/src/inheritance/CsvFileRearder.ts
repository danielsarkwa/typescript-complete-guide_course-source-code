import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // this.mapRow is passing a reference to the mapRow method of the class
      .map(this.mapRow);
  }
}
