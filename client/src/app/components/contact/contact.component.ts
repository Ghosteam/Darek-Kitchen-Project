import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),

  });
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log('llllllll',this.contactForm.value);
    this.contactService.addContact(this.contactForm.value)
    .subscribe((data: any) =>{ console.log(data)})
    // location.reload()
  }
  alertWithSuccess(){  
    console.log('******',this.contactForm.value);

    if(this.contactForm.value.email.length === 0 || this.contactForm.value.message.length === 0 || this.contactForm.value.subject.length === 0){
      Swal.fire({
        icon: 'error',
        title: "<h5 style='color:#DEB28F; margin-bottom:2px;font-family: Poppins, sans-serif'>Oops...<br> Please fill all the<br> form !</h5>",
        width:"350px",
        background:"black",
        backdrop: "rgba(0, 0, 0, 0.685)",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        iconColor: '#fff',
        showConfirmButton: true,
        buttonsStyling: true,
        confirmButtonColor:'#DEB28F'
      })
    } else{ 
      this.handleSubmit()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "<h5 style='color:white; margin-bottom:2px; font-family: Poppins, sans-serif'> Your message has been sent<br> Successfully !<br>😉</h5>",
      showConfirmButton: true,
      confirmButtonColor:'#DEB28F',
      width:"350px",
      background:"black",
      backdrop: "#deb38f93",
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      iconColor: '#DEB28F',
      buttonsStyling: true
      
    })
    this.contactForm.setValue({email: '', subject: '', message: ''})
  }
    

  }
}
