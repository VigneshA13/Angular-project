import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent {
  dept = 'compurt science';
  getdept() {
    return this.dept;
  }
}
