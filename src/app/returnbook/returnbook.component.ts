import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { PatronService } from '../patron.service';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent {
  returnForm : FormGroup;
  pid : number=0;
  isbn : string ="";
  // borrowedBooks : string[]=[""];


  constructor(private formBuilder : FormBuilder , private patronService : PatronService, private bookService : BookServiceService){
    this.returnForm = formBuilder.group({
      pid : ['',Validators.required],
      isbn : ['',Validators.required],
    })
  }

  returnBook(){
    if(this.returnForm.valid){
      console.log(this.returnForm.value);
      const patronId = this.returnForm.controls['pid'].value;
      const bookISBN = this.returnForm.controls['isbn'].value;
      console.log(bookISBN);
      console.log(patronId);
      console.log(this.patronService.returnBook(patronId,bookISBN) + "  returnBook method result")

      if( this.patronService.returnBook(patronId,bookISBN)){
        
          const increaseQuantity = this.bookService.increaseBookQuantity(bookISBN);
          if(increaseQuantity){
            this.patronService.removeBorrowedBook(patronId,bookISBN);
            alert(`Book with isbn number ${bookISBN} returned successfully`);
          }
          else{
            alert(`Book with isbn number ${bookISBN} not returned successfully`);
          }
        
      }
      else{
        alert(`Book with isbn number ${bookISBN} not in the borrowed list `);
      }
      this.returnForm.reset()
    }
  }
}
