import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service'
import { Author } from '../../services/books.service' 
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-allauthors',
  templateUrl: './allauthors.component.html',
})

export class AllauthorsComponent implements OnInit {
  faPen   = faPen;
  faTrash = faTrash;
  
  authors : Author[] = [];

  constructor( private _authorsService: AuthorsService ) { }

  ngOnInit(): void {
    this._authorsService.getAuthors().subscribe( resp => {
      this.authors = resp;
    });
  }

}
