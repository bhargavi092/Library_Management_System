import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { AllPatrons } from '../all-patrons';
import { PatronService } from '../patron.service';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent {
  
  toggleSideNav = true;
  showLogoutDropdown = false;

  borrowForm : FormGroup;
  pid : number=0;
  isbn : string ="";

  userType: string ='';
    username: string = '';
    paramsObject : any;
  // borrowedBooks : string[]=[""];


  constructor(private formBuilder : FormBuilder , private patronService : PatronService, private bookService : BookServiceService , private router: Router,private route: ActivatedRoute){
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
      this.router.navigateByUrl('/');
    }
    
  }
  toggleLogoutDropdown() {
    this.showLogoutDropdown = !this.showLogoutDropdown;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.paramsObject = {};
      params.keys.forEach(key => {
        this.paramsObject[key] = params.get(key);
      });
      console.log(this.paramsObject);
      this.userType = this.paramsObject.userType;
      this.username = this.paramsObject.username;
  

    });
  }
  logout() {
    localStorage.removeItem(this.userType)
    this.router.navigateByUrl('/');
  }
}
