import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ramya';
  name='';
  employee ={
    firstname: 'johndoe',
    age: 28,
    language: ['English', 'Tamil', 'Hindi'],
    color:'red',
    star:'surya'
}
  constructor(){
   // this.name='manigandan';
   this.setName();
  }
  setName(){
    this.name='manigandan';
  }


}
