import { Injectable } from '@angular/core';
import { Author } from './books.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable()
export class AuthorsService {
  private url = 'http://localhost:5000/api';
  private author: Author;
         
    constructor( private http: HttpClient ){ }

    getAuthors(){
      return this.http.get(`${this.url}/authors`).pipe(
        map( this.myArrayAuthors )
        )
      }

    private  myArrayAuthors( bookObject : object ){
      if ( bookObject === null ) {
        return [];
      }
      return bookObject['data']
    }

    getAuthor( id : number){
      return this.http.get(`${this.url}/author/${id}`).pipe(
        map( this.myArrayAuthor )
      );
    }

    private  myArrayAuthor( bookObject : object ){
      if ( bookObject === null ) {
        return [];
      }
      return bookObject['data']
    }


    postAuthor( author : Author ){
      return this.http.post(`${this.url}/author`, author);
    }

    putAuthor ( id : number, author : Author){
      return this.http.put(`${this.url}/author/${id}`, author);
    }


}
