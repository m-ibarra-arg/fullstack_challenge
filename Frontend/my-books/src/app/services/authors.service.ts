import { Injectable } from '@angular/core';
import { Author } from './books.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthorsService {
    
    private authors : Author[] = [
        {
        firstName: "JRR",
        lastName: "Tolkien"
        },
        {
        firstName: "Liliana",
        lastName: "Baudoc"
        },
        {
        firstName: "JK",
        lastName: "Rowling"
        },
        {
        firstName: "Arthur Conan",
        lastName: "Doyle"
        },
        {
        firstName: "Isabel",
        lastName: "Allende"
        },
        {
        firstName: "Julio",
        lastName: "Verne"
        },
      ]
         
    constructor( private http: HttpClient ){
    }

    getPaises(){
      return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe(
        map( (resp : any[]) => 
          resp.map( pais => ({ nombre: pais.name, codigo: pais.alpha3Code
          }) 
        )
      ))
    }

    getAuthors(){
        return this.authors
      }


}
