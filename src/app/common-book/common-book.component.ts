import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-book',
  templateUrl: './common-book.component.html',
  styleUrls: ['./common-book.component.scss']
})
export class CommonBookComponent implements OnInit {
  @Input() book:any;
  constructor() { }

  ngOnInit(): void {
  }

}
