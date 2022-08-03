import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // name:any;
  // email:any;
  // mnumber:any;
  // password:any;
  user:any={
    name:'',
    email:'',
    mnumber:'',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
