import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../../services/books.service';
import { Draft } from '../../../models/books/draft.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public booksService: BooksService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    summary: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    gerne: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ]),
    stock: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ])
  })

  async addBook() {
    if(this.newForm.invalid) return;

    try {
      await this.booksService.create(this.newForm.value as Draft)
      this.router.navigate(['/'])
    } catch (error) {
      
    }
  }

}
