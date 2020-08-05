import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class BooksService {
    
    private url = '/api';
    private book : Book;  

    constructor( private http: HttpClient,
                 ){ }
    
    searchBooks( search : string) : Book[]{
      
      let BooksArr:Book[] = [];
      search = search.toLowerCase();
           
      this.getBooks().subscribe( resp => {
        console.log(resp)
        for (let _book of resp){
          let name = _book.name.toLowerCase();
          if (name.indexOf( search ) >= 0 )  {
            BooksArr.push(_book)
          }
        }
      })
  
    return BooksArr;
    }

    getBooks(){
        return this.http.get(`${this.url}/books`).pipe(
          map( this.myArrayBooks )
        )
      }
    
    private  myArrayBooks( bookObject : object ){
      if ( bookObject === null ) {
        return [];
      }
      return bookObject['data']
    }

    getBook( id : number){
      return this.http.get(`${this.url}/book/${id}`).pipe(
        map( this.myArrayBook )
      );
    }
    private  myArrayBook( bookObject : object ){
      if ( bookObject === null ) {
        return [];
      }
      return bookObject['data']
    }

    postBook( book : Book ){
      return this.http.post(`${this.url}/book`, book);
    }

    putBook ( id : number, book : Book ){
      return this.http.put(`${this.url}/book/${id}`, book);
    }
    
    deleteBook ( id : number ){
      return this.http.delete(`${this.url}/book/${id}`);
    }

}

export interface Author {
    firstName:string;
    lastName:string;
  }

export interface Book {
    name:string;
    isbn:string;
    author:Author;
  }
  