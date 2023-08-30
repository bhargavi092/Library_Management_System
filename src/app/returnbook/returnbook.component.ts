import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { PatronService } from '../patron.service';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent {

  toggleSideNav = true;
  showLogoutDropdown = false;
  returnForm : FormGroup;
  pid : number=0;
  isbn : string ="";

  userType: string ='';
  username: string = '';
  paramsObject : any;
  // borrowedBooks : string[]=[""];


  constructor(private formBuilder : FormBuilder , private patronService : PatronService, private bookService : BookServiceService, private router: Router,private route: ActivatedRoute){
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
    this.router.navigate(['/viewbook'], {queryParams: { userType:this.userType, username : this.username }})
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
