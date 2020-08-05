import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '../../services/books.service' 
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
})
export class AllbooksComponent implements OnInit {
  faPen   = faPen;
  faTrash = faTrash;

  books : Book[] = [];

  constructor( private _booksService: BooksService ) { }

  ngOnInit(): void {
    this._booksService.getBooks().subscribe( resp => {
      this.books = resp;
    });
  }

}

