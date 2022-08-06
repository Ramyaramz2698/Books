import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-angular-form2',
  templateUrl: './angular-form2.component.html',
  styleUrls: ['./angular-form2.component.scss']
})
export class AngularForm2Component implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('Ramya'),
    lastName: new FormControl('Rasaiya'),
    email: new FormControl('ramyar1101@gmail.com'),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
    // console.log(this.profileForm.value);
    setTimeout(()=>{
      this.updateProfile();
    },5000)
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName:'Ram',
      email:'',
      address: {
        street: '123 Drew Street',
        zip:'9045',
        city:'chennai',
        state:'tamilnadu'
      }
    });
    this.profileForm.get('firstName')?.setValue('mani');
  }

}
