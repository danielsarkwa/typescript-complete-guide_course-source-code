import { MatchReader } from './composition/MatchReader';

import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsReportWithHtmlReport('Man United');
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
