import { Injectable } from '@angular/core';
import { AllPatrons } from './all-patrons';

@Injectable({
  providedIn: 'root'
})
export class PatronService {
  patronList : AllPatrons[] = [
    {
      id : 1,
      pname : "patron1",
      borrowedBooks : [123,23]
    },
  ]


  addPatron(patron : AllPatrons){
    console.log(patron);
    this.patronList.push(patron);
    console.log(this.patronList)
  }

  borrowPatron(pid : number): boolean {
    const patronCheck = this.patronList.find(patron => patron.id ==pid);
    if(patronCheck){
      return true;
    }else{
      alert(`patron with id ${pid} does not exists`);
      return false
    }
  }

  addBorrowedBook(pid:number , isbn:number){
      const patron = this.patronList.find(p => p.id === pid);
      if(patron){
        patron.borrowedBooks.push(isbn);
        console.log(patron.borrowedBooks);
      }
  }
  constructor() { }
}
