import { Component , ViewEncapsulation} from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddbookComponent {
    addBookForm : FormGroup;
    id : number=0;
    isbn : number=0;
    title : string ="";
    author : string="";
    quantity : number=0;


    constructor(private formBuilder : FormBuilder , private bookService : BookServiceService, private router:Router){
      this.addBookForm = formBuilder.group({
        id : ['',Validators.required],
        isbn : ['',[Validators.required,Validators.maxLength(13)]],
        title : ['',Validators.required],
        author: ['',Validators.required],
        quantity: ['',Validators.required]
      })
    }

    addBook(){
      if(this.addBookForm.valid){
        console.log(this.addBookForm.value);
        const newBook = this.addBookForm.value;
        this.bookService.addBook(newBook)
        this.addBookForm.reset()
        alert("Book added successfully")
        this.router.navigateByUrl('/');
      }
      
    }
}
