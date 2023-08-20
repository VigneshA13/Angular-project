import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { MainComponent } from './main/main.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'table', component: TableComponent },
  { path: 'timetable', component: TimeTableComponent },
  { path: 'about', component: AboutComponent },
  { path: 'page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
