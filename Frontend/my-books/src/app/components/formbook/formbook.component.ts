import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorsService } from '../../services/authors.service'



@Component({
  selector: 'app-formbook',
  templateUrl: './formbook.component.html',
})
export class FormbookComponent implements OnInit {
 
  book = {
    name: '',
    isbn: '',
    author: ['-- Select Option --', '']
  }
  
  paises: any[] = [];

  // author = {
  //   firstName: '',
  //   lastName: ''
  // }

  constructor( private authorService : AuthorsService) { }

  ngOnInit(): void {
    this.authorService.getPaises().subscribe( paises =>{
      this.paises = paises;
      this.paises.unshift({
        nombre: '-- Select Option --',
        codigo: ''
      })
    })
  }

  save(form:NgForm){
    console.log(form)

    
    if (form.invalid){
      Object.values(form.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
  }
}


