import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books:any;
  searchValue:any='angular';
  btnDisabled=false;
  constructor(
    private http: HttpClient,
  ) { }
  
 ngOnInit(): void {
        this.getList();
   }
  getList(){ 
    if(!this.searchValue){
      console.log('value is required');
      return;
    }
    this.btnDisabled=true;
  
    let url=`https://www.googleapis.com/books/v1/volumes?q=${this.searchValue}`
    this.http.get(url).subscribe((data:any) => {
      this.btnDisabled=false;
        console.log(data);
        this.books=data;
    });
  }
 
 
 
 
    
  
}
