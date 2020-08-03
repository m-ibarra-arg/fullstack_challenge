import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  book : any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _booksService: BooksService
    ) {
    
    this.activatedRoute.params.subscribe( params => {
      this.book = this._booksService.getBook( params['id'] );
    })
   }

  ngOnInit(): void {
  }

}
