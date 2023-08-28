import { Component, importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<main>
   
    <nav class="navBar">
      <div class="toggler"><h3>&#9776;</h3></div>
      <!-- <div class="lsm"> -->
        <h2 >Library Mangement System</h2>
      <!-- </div> -->
      <div class="user">
        user profile
      </div>
    </nav>
    <div class="b-container">
      <div class="side-nav">
        <a [routerLink]="['/']">Available Books</a>
        <a [routerLink]="['/addbook']">Add Book</a>
        <a [routerLink]="['/viewpatron']">View Patrons</a>
        <a [routerLink]="['/addpatron']">Add Patron</a>
        <a [routerLink]="['/borrowbook']">Borrow Book</a>
        <a [routerLink]="['/returnbook']">Return Book</a>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS';
}
