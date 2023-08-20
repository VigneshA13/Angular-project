import { Component } from '@angular/core';
export interface PeriodicElement {
  first: string;
  day: string;
  second: string;
  third: string;
  four: string;
  five: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    day: 'A',
    first: 'AFM/LA',
    second: 'CNS/SB',
    third: 'MS/DR',
    four: 'AFM/KRM',
    five: 'GE',
  },
  {
    day: 'B',
    first: 'DT LAB',
    second: 'DT LAB',
    third: 'DT LAB',
    four: 'DT/SS',
    five: 'GE',
  },
  {
    day: 'C',
    first: 'CS LAB',
    second: 'CS LAB',
    third: 'CS LAB',
    four: 'CNS/SAO',
    five: 'DT/SS',
  },
  {
    day: 'D',
    first: 'AFM/KRM',
    second: 'DT/SS',
    third: 'MS/DR',
    four: 'DT/SS',
    five: 'CNS/SAO',
  },
  {
    day: 'E',
    first: 'DT/SS',
    second: 'MS/DR',
    third: 'MS/DR',
    four: 'AFM/KRM',
    five: 'GE',
  },
  {
    day: 'F',
    first: 'CNS/SB',
    second: 'MS/DR',
    third: 'AFM/LA',
    four: 'CNS/SB',
    five: 'GE',
  },
];

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent {
  displayedColumns: string[] = [
    'day',
    'first',
    'second',
    'third',
    'four',
    'five',
  ];
  dataSource = ELEMENT_DATA;
}
