import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  books : any[] = [];
  search : string;

  constructor( private activatedRoute: ActivatedRoute,
               private _booksServices: BooksService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.search = params['search'];
      this.books = this._booksServices.searchBooks(params['search']);
    })
  }

}
