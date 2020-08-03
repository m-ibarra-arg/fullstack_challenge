import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service'
import { Author } from '../../services/books.service' 


@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
})

export class AllauthorsComponent implements OnInit {

  authors : Author[] = [];

  constructor( private _authorsService: AuthorsService ) { }

  ngOnInit(): void {
    this.authors= this._authorsService.getAuthors();
  }

}
