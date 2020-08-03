import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '../../services/books.service' 

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
})
export class AllbooksComponent implements OnInit {

  books : Book[] = [];

  constructor( private _booksService: BooksService ) { }


  ngOnInit(): void {
    this.books= this._booksService.getBooks();
  }

}

