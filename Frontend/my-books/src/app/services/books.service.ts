import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
    
    private books : Book[] = [
        {
          name: "El señor de los anillos ",
          isbn: "1234-ASDFQWER-1234",
          author: {
                    firstName: "JRR",
                    lastName: "Tolkien"
                    }
        },
        {
          name: "Los dias del venado ",
          isbn: "1234-ASDFQWER-1234",
          author: {
            firstName: "Liliana",
            lastName: "Baudoc"
            }
        },
        {
          name: "Harry Potter ",
          isbn: "1234-ASDFQWER-1234",
          author: {
            firstName: "JK",
            lastName: "Rowling"
            }
        },
        {
          name: "Sherlock Holmes",
          isbn: "1234-ASDFQWER-1234",
          author: {
            firstName: "Arthut Conan",
            lastName: "Doyle"
            }
        },
      ]
        
    constructor(){
      console.log("Service ready!");
    }
    

    getBooks(){
        return this.books
      }
    getBook( id : string){
      return this.books[id];
    }

    searchBooks( search : string) : Book[]{
      
      let BooksArr:Book[] = [];
      search = search.toLowerCase();
      
      for (let book of this.books){
        let name = book.name.toLowerCase();
        if (name.indexOf( search ) >=0 )  {
          BooksArr.push(book)
        }
      }
    return BooksArr;
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
  