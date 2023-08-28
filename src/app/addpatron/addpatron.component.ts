import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,NgForm,Validators } from '@angular/forms';
import { AllPatrons } from '../all-patrons';
import { PatronService } from '../patron.service';

@Component({
  selector: 'app-addpatron',
  templateUrl:'./addpatron.component.html',
  styleUrls: ['./addpatron.component.css']
})
export class AddpatronComponent {
  addPatronForm : FormGroup;
  id : number=0;
  pname : string ="";
  // borrowedBooks : string[]=[""];
  quantity : number=0;


  constructor(private formBuilder : FormBuilder , private patronService : PatronService){
    this.addPatronForm = formBuilder.group({
      id : ['',Validators.required],
      pname : ['',Validators.required],
    })
  }

  addPatron(){
    if(this.addPatronForm.valid){
      console.log(this.addPatronForm.value);
      const newPatron = this.addPatronForm.value;
      this.patronService.addPatron(newPatron)
      this.addPatronForm.reset()
    }
    
  }
}


