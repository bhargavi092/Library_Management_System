import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginClicked = false;

  loginForm : FormGroup;
  username : string="";
  password : string ="";

    constructor(private formBuilder: FormBuilder,private router: Router){
      this.loginForm = formBuilder.group({
        username : ['',Validators.required],
        password : ['',Validators.required],
      })
    }

    login(){
      this.loginClicked = true;
      if (this.loginForm.valid) {

        const data = {
          username:this.loginForm.value.username,
          password: this.loginForm.value.password
        };
        console.log(this.loginForm.value.username)
        localStorage.setItem('librarian',JSON.stringify(data));
        
        // alert(this.loginForm.value.userType)
        // this.router.navigateByUrl('/viewbook');
        // this.router.navigateByUrl(`/viewbook?userType=${this.loginForm.value.userType}`);
        this.router.navigate(['/viewbook'], {queryParams: { userType:'librarian', username : this.loginForm.value.username }})

      }
    }
}
