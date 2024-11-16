import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  name:any;
  email:any
   message:any;
 
  emailaddress= "support@gmail.com";
 
  
   onSubmit() {
     
     
     alert("We received your feedBack  successfully");
     this.name= '';
     this.email= '',
    this.message='';
   }

}
