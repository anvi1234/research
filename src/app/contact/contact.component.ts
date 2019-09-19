import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  UserForm:FormGroup;

  constructor( private service:ResearchService) {
    this.UserForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required),

    })

    }
 
   saveData(){
       this.service.UserData(this.UserForm.value).subscribe(x=>{
       return x;
         
     })
   }

    save(){
      console.log(this.UserForm.value); 
    }
  ngOnInit() {
  }



}
