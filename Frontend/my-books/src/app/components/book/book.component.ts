import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../services/books.service' 


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  book : Book;

  constructor( private activatedRoute: ActivatedRoute,
               private _booksService: BooksService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this._booksService.getBook( params['id'] ).subscribe(resp => {
        this.book = resp;
      });
    })
   }

  ngOnInit(): void {
  }

}
