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
      borrowedBooks : ['hi','hello']
    },
  ]


  addPatron(patron : AllPatrons){
    console.log(patron);
    this.patronList.push(patron);
    console.log(this.patronList)
  }
  constructor() { }
}
