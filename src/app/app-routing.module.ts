import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddpatronComponent } from './addpatron/addpatron.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { ViewpatronComponent } from './viewpatron/viewpatron.component';

const routes: Routes = [
  {
    path:'', component:ViewbooksComponent
  },
  {
    path:'addbook', component:AddbookComponent
  },
  {
    path:'viewpatron', component:ViewpatronComponent
  },
  {
    path:'addpatron', component:AddpatronComponent
  },
  {
    path:'borrowbook', component:BorrowbookComponent
  },
  {
    path:'returnbook', component:ReturnbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
