import { Component } from '@angular/core';
import { PatronService } from '../patron.service';
import { AllPatrons } from '../all-patrons';

@Component({
  selector: 'app-viewpatron',
  template:`  <div class="viewpatrons-container">
  <div class="viewpatrons-heading"><h3>All Patrons</h3></div>
  <div class="search">
        <label>Search : </label> <input type="text" placeholder="Search Patron by id.." #filterpatron > 
        <button class=" btn btn-primary" type="button" (click)="filterResults(filterpatron.value)">Search</button>
  </div>
  <div class="tableClass">
    <table border="1" class="patrons-table">
      <tr><th>ID</th><th>Name</th><th>Borrowed Books ISBN numbers</th></tr>
      <tr *ngFor="let patron of filteredPatronList" >
      <td>{{patron.id}}</td><td>{{patron.pname}}</td><td>{{patron.borrowedBooks}}</td>
      </tr>
    </table>
  </div>
</div>` ,
  styleUrls: ['./viewpatron.component.css']
})
export class ViewpatronComponent {
  patronList : AllPatrons[];
  filteredPatronList : AllPatrons[] =[];
  constructor(private _patronService : PatronService){
    this.patronList = this._patronService.patronList;
    this.filteredPatronList = this._patronService.patronList;
  }

  filterResults(filterValue: string) {
    if (!filterValue) {
      this.filteredPatronList = this.patronList; 
    } 
    else{
        this.filteredPatronList = this.patronList.filter(  patron => patron.id.toString() === filterValue)
    }
  }
}
