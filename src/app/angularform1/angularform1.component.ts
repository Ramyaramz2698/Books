import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-angularform1',
  templateUrl: './angularform1.component.html',
  styleUrls: ['./angularform1.component.scss']
})
export class Angularform1Component implements OnInit {
  name = new FormControl('Ramya');

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.updateName('nancy');
    },5000)
  }
  updateName(name:any) {
    this.name.setValue(name);
  }

}
