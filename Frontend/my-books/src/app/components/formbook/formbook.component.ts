import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthorsService } from '../../services/authors.service'
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService, Author } from '../../services/books.service'
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-formbook',
  templateUrl: './formbook.component.html',
})
export class FormbookComponent implements OnInit {
 
  author : Author;
  book : any = {
                    name: '',
                    isbn: '',
                    author: {
                      id: '',
                      firstName: '',
                      lastName: ''
                    },
                  };

  constructor( private _authorService : AuthorsService,
               private _bookService : BooksService,
               private route: ActivatedRoute,
               private router: Router
               ) { }

  ngOnInit(): void {
    this._authorService.getAuthors().subscribe( resp =>{
      this.author = resp;
    })

    const id = this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this._bookService.getBook( parseInt(id) ).subscribe( resp =>{
        this.book.name = resp['name'];
        this.book.isbn = resp['isbn'];
        this.book.author = resp['author'];
      }) 
    }
  }

  save(form:NgForm){

    if (form.invalid){
      Object.values(form.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    Swal.fire({   
      text: 'Waiting',
      title: 'Saving book.',
      allowOutsideClick: false
    })
    Swal.showLoading();

    let request: Observable<any>;

    const id = this.route.snapshot.paramMap.get('id')   
    if ( id ) {
      request = this._bookService.putBook( parseInt(id), form.value );
    } else{
      request = this._bookService.postBook( form.value );
    } 
    
    request.subscribe( resp => {
      Swal.fire({
        title: form.value.name,
        text: 'Correct changes!',
        icon: 'success'
      }).then( resp =>{
        this.router.navigate(['/all-books']);
      })      
    })
  }
}


