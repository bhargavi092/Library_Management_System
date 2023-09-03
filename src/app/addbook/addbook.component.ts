import { Component , ViewEncapsulation} from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  
})
export class AddbookComponent {

    toggleSideNav = true;
    showLogoutDropdown = false;
    userType: string ='';
    username: string = '';
    paramsObject : any;

    addBookForm : FormGroup;
    // id : number=0;
    isbn : number=0;
    title : string ="";
    author : string="";
    quantity : number=0;


    constructor(private formBuilder : FormBuilder , private bookService : BookServiceService, private router:Router,private route: ActivatedRoute){
      this.addBookForm = formBuilder.group({
        // id : ['',Validators.required],
        isbn : ['',[Validators.required,Validators.maxLength(13)]],
        title : ['',Validators.required],
        author: ['',Validators.required],
        quantity: ['',Validators.required]
      })
    }

    addBook(){
      if(this.addBookForm.valid){
        console.log(this.addBookForm.value);
        
        // this.bookService.addBook(newBook)
        const booksString = localStorage.getItem('books');
        const existingBooks = booksString ? JSON.parse(booksString) : [];
        const nextId = existingBooks.length;

        const newBook = {
          id: nextId + 1,
          ...this.addBookForm.value
        }
        
        existingBooks.push(newBook);

        localStorage.setItem('books', JSON.stringify(existingBooks));

        this.addBookForm.reset()
        alert("Book added successfully")
        // this.router.navigateByUrl('/viewbook');
        this.router.navigate(['/viewbook'], {queryParams: { userType:this.userType, username : this.username }})

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
