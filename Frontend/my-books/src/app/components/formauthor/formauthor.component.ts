import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formauthor',
  templateUrl: './formauthor.component.html',
})
export class FormauthorComponent implements OnInit {

  author = {
    firstName: '',
    lastName: ''
  }

  constructor() { }

  ngOnInit(): void {
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
 