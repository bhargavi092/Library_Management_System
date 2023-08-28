import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { AllPatrons } from '../all-patrons';
import { PatronService } from '../patron.service';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent {
  borrowForm : FormGroup;
  pid : number=0;
  isbn : string ="";
  // borrowedBooks : string[]=[""];


  constructor(private formBuilder : FormBuilder , private patronService : PatronService, private bookService : BookServiceService){
    this.borrowForm = formBuilder.group({
      pid : ['',Validators.required],
      isbn : ['',Validators.required],
    })
  }

  borrowBook(){
    if(this.borrowForm.valid){
      console.log(this.borrowForm.value);
      const patronId = this.borrowForm.controls['pid'].value;
      const bookISBN = this.borrowForm.controls['isbn'].value;
      console.log(bookISBN);
      console.log(patronId);

      if( this.patronService.borrowPatron(patronId)){
        if(this.bookService.borrowBook(bookISBN)){
          const reduceQuantity = this.bookService.reduceBookQuantity(bookISBN);
          if(reduceQuantity){
            this.patronService.addBorrowedBook(patronId,bookISBN);
            alert(`Book with isbn number ${bookISBN} borrowed successfully`);
          }
          else{
            alert(`Copies of Book with isbn number ${bookISBN} not available`);
          }
        }
      }
      this.borrowForm.reset()
    }
    
  }
}
