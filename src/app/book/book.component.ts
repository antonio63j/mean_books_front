import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
     this.mostrarLibros();
  }

  public mostrarLibros() {
    // this.http.get ('/book').subscribe(data => {
      console.log("en mostrarLibros()");
      this.http.get ('http://localhost:3000').subscribe(data => {
        this.books = data;
      });
  }

  createBook(){
    this.router.navigate(['http://localhost:3000/book-create']);
  }
  
  bookCrear(){
    console.log("llamado");
  }

}
