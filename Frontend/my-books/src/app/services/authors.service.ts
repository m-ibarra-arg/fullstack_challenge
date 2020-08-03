import { Injectable } from '@angular/core';
import { Author } from './books.service';


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
        
    constructor(){
    }

    getAuthors(){
        return this.authors
      }

}
