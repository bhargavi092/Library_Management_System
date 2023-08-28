import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { AvailableBooks } from '../available-books';

@Component({
  selector: 'app-viewbooks',
  template: `<div class="viewbooks-container">
    <div class="viewbooks-heading"><h3>Available Books</h3></div>
    <div class="search">
          <label>Search : </label> <input type="text" placeholder="Search Book by name.." #filterbook>
          <button class=" btn btn-primary" type="button" (click)="filterResults(filterbook.value)">Search</button>

    </div>
    <div class="tableClass">
      <table border="1" class="books-table">
        <tr><th>S.ID</th><th>ISBN</th><th>Title</th><th>Author</th><th>Quantity</th></tr>
        <tr *ngFor="let book of filteredBookList" >
        <td>{{book.id}}</td><td>{{book.isbn}}</td><td>{{book.title}}</td><td>{{book.author}}</td><td>{{book.quantity}}</td>
        </tr>
      </table>
    </div>
</div>`,
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {

  availableBooksList : AvailableBooks[];
  filteredBookList : AvailableBooks[] =[];

  constructor(private _bookService : BookServiceService){
    this.availableBooksList = this._bookService.availableBooksList;
    this.filteredBookList = this._bookService.availableBooksList;
  }

  filterResults(filterValue: string) {
    if (!filterValue) {
      this.filteredBookList = this.availableBooksList; 
    } 
    else{
        this.filteredBookList = this.availableBooksList.filter(  book => book.title?.toLowerCase().includes( filterValue.toLowerCase()))
    }
  }
}
