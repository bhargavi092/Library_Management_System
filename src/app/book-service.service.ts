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
  constructor() {

   
   }
}
