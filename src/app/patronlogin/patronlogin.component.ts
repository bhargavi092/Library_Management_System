import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patronlogin',
  templateUrl: './patronlogin.component.html',
  styleUrls: ['./patronlogin.component.css']
})
export class PatronloginComponent {
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
        localStorage.setItem('patron',JSON.stringify(data));
        
        // this.router.navigateByUrl(`/viewbook?userType=${this.loginForm.value.userType}&&`);
        this.router.navigate(['/viewbook'], {queryParams: { userType:'patron', username : this.loginForm.value.username }})

      }
    }
}
