import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonBookComponent } from './common-book/common-book.component';
import { FormComponent } from './form/form.component';
import { Angularform1Component } from './angularform1/angularform1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularForm2Component } from './angular-form2/angular-form2.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    PageNotFoundComponent,
    CommonBookComponent,
    FormComponent,
    Angularform1Component,
    AngularForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
