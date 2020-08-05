import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../../services/books.service' 
import { AuthorsService } from '../../services/authors.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-formauthor',
  templateUrl: './formauthor.component.html',
})
export class FormauthorComponent implements OnInit {


  author : Author = { 
                      firstName : '', 
                      lastName : ''
                    };
                    

  constructor( private _authorsService: AuthorsService,
               private route: ActivatedRoute,
               private router: Router            
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this._authorsService.getAuthor( parseInt(id) ).subscribe( resp =>{
        this.author.firstName = resp['firstName'];
        this.author.lastName = resp['lastName'];
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
      request = this._authorsService.putAuthor( parseInt(id), form.value );
    } else{
      request = this._authorsService.postAuthor( form.value );
    } 

    request.subscribe( resp => {
      Swal.fire({
        title: form.value.name,
        text: 'Correct changes!',
        icon: 'success'
      }).then( resp =>{
        this.router.navigate(['/all-authors']);
      })
    })
  }
}
 