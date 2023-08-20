import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PopupComponent } from '../popup/popup.component';

export interface PeriodicElement {
  name: string;
  position: number;
  dno: string;
  city: string;
  email: string;
  phone: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Goodson',
    dno: '22PCA106',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Kanyakumari',
  },
  {
    position: 2,
    name: 'Martin',
    dno: '22PCA111',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 3,
    name: 'Loyola',
    dno: '22PCA113',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Tenkasi',
  },
  {
    position: 4,
    name: 'Ignatius',
    dno: '22PCA135',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Nagapattinam',
  },
  {
    position: 5,
    name: 'Hashwar',
    dno: '22PCA138',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 6,
    name: 'Dravid',
    dno: '22PCA139',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Kallakurichi',
  },
  {
    position: 7,
    name: 'Santhosh',
    dno: '22PCA140',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 8,
    name: 'Vikram',
    dno: '22PCA141',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 9,
    name: 'Ragu',
    dno: '22PCA142',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 10,
    name: 'Dhinesh',
    dno: '22PCA143',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 11,
    name: 'Susai',
    dno: '22PCA145',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Kallakurichi',
  },
  {
    position: 12,
    name: 'Shyam',
    dno: '22PCA146',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 13,
    name: 'Sudharsan',
    dno: '22PCA147',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 14,
    name: 'Sanjay',
    dno: '22PCA148',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Thanjavur',
  },
  {
    position: 15,
    name: 'Murali',
    dno: '22PCA150',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 16,
    name: 'Surya',
    dno: '22PCA151',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Madurai',
  },
  {
    position: 17,
    name: 'Shreenath',
    dno: '22PCA152',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 18,
    name: 'Abishek',
    dno: '22PCA153',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Trichy',
  },
  {
    position: 19,
    name: 'Prathuz',
    dno: '22PCA154',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Sivakasi',
  },
  {
    position: 20,
    name: 'Surendhar',
    dno: '22PCA159',
    email: 'test123@mail.com',
    phone: 1234567890,
    city: 'Namakkal',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = [
    'position',
    'dno',
    'name',
    'email',
    'phone',
    'city',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  Openpopup() {
    this.dialog.open(PopupComponent, {
      width: '40%',
      height: '300px',
    });
  }
}
