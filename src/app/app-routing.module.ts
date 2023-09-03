import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddpatronComponent } from './addpatron/addpatron.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { ViewpatronComponent } from './viewpatron/viewpatron.component';
import { LoginComponent } from './login/login.component';
import { PatronloginComponent } from './patronlogin/patronlogin.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 
  {
    path:'', component:LoginComponent
  },
  {
    path:'viewbook', component:ViewbooksComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'patronlogin', component:PatronloginComponent
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
