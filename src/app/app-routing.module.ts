import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angularform1Component } from './angularform1/angularform1.component';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularForm2Component } from './angular-form2/angular-form2.component';

const routes: Routes = [
  { path: 'list', component:BooksListComponent },
  { path: 'form', component:FormComponent },
  { path: 'form1', component:Angularform1Component },
  { path: 'form2', component:AngularForm2Component },
  { path: 'view', component:BookComponent },
  { path: '',   redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
