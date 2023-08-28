import { Injectable } from '@angular/core';
import { AvailableBooks } from './available-books';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  availableBooksList : AvailableBooks [] = [
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    {
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },{
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },{
      id : 1,
      isbn : 123456,
      title : "Book Title",
      author : "author",
      quantity : 10
    },
    
   
  
    
  ]

  addBook(book : AvailableBooks){
    console.log(book);
    this.availableBooksList.push(book);
    console.log(this.availableBooksList)
  }

  borrowBook(isbn : number):boolean{
    const bookCheck = this.availableBooksList.findIndex(book => book.isbn === isbn);
    if (bookCheck !== -1 && this.availableBooksList[bookCheck].quantity > 0) {
      return true;
    } else {
      alert(`patron with id ${isbn} does not exists`);
      return false;
    }
  }

  reduceBookQuantity(isbn : number){
    const bookIndex = this.availableBooksList.findIndex(book => book.isbn === isbn);
    this.availableBooksList[bookIndex].quantity--;
    return true;
  }
  constructor() {

   
   }
}
