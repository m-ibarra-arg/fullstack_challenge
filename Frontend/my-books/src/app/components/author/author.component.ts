import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../services/authors.service'
import { Author } from '../../services/books.service' 

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
})
export class AuthorComponent implements OnInit {

  author: Author;

  constructor(private activatedRoute: ActivatedRoute,
              private _authorService: AuthorsService) { 
    
    this.activatedRoute.params.subscribe( params => {
      this._authorService.getAuthor( params['id'] ).subscribe(resp => {
        this.author = resp;
      });
    })
  }

  ngOnInit(): void {
  }

}
