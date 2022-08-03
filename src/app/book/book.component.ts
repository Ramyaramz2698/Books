import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  id:any;
  bookData:any;
constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router  ) {}
ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id']
      console.log(this.id);
      this.getBook();
     });
   
  }
  getBook(){ 
    let url=`https://www.googleapis.com/books/v1/volumes/${this.id}`
    this.http.get(url).subscribe((data:any) => {
        console.log(data);
        this.bookData=data;
  });
  }

  

}
