import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BookComponent} from '../book/book.component';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};
  @Input() consultalibros: BookComponent;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('http://localhost:3000/book', this.book)
      .subscribe(res => {
          // let id = res['_id'];
          // this.router.navigate(['/book-details', id]);
          console.log("enviado post para cear nuevo libro");
          this.consultalibros.mostrarLibros();
        }, (err) => {
          console.log(err);
        }
      );
  }

}