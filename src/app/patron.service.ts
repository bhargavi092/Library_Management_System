import { Injectable } from '@angular/core';
import { AllPatrons } from './all-patrons';

@Injectable({
  providedIn: 'root'
})
export class PatronService {
  patronList : AllPatrons[] = [
    {
      id : 1,
      pname : "Rose",
      borrowedBooks : [77,90]
    },
    {
      id : 2,
      pname : "Lotus",
      borrowedBooks : []
    },
    {
      id : 3,
      pname : "Lilly",
      borrowedBooks : [20]
    },
  ]


  addPatron(patron : AllPatrons){
    const nextId = this.patronList.length;
    const newPatron: AllPatrons = {
      ...patron,
      id: nextId + 1
    };
    console.log(patron);
    this.patronList.push(newPatron);
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

  returnBook(pid:number , isbn:number):boolean{
    const patronCheck = this.patronList.find(patron => patron.id ==pid);
    if(patronCheck && patronCheck.borrowedBooks.includes(isbn)){
      return true;
    }
    return false;
  }
  removeBorrowedBook(pid:number , isbn:number){
    const patron = this.patronList.find(p => p.id === pid);
    if (patron) {
      patron.borrowedBooks = patron.borrowedBooks.filter(b_isbn => b_isbn !== isbn);
      console.log(patron.borrowedBooks);
    }
  }
  constructor() { }
}
