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
 
   contactForm = {
   
       name: '',
       email: '',
       message: ''
     
   };
 
   onSubmit() {
     console.log('Form Submitted:', this.contactForm);
     // Add logic to handle form submission like sending it to a server
     alert("message sent successfully")
   }

}
