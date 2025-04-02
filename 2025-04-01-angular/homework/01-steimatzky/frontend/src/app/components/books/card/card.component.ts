import { Component, input, output } from '@angular/core';
import { Book } from '../../../models/books/book.model';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(
    public booksService: BooksService
  ) {}

  book = input<Book>()
  bookDeleted = output<string>()


  async deleteMe() {
    try {
      await this.booksService.delete(this.book()!.id)
      this.bookDeleted.emit(this.book()!.id)
    } catch (error) {
      
    }
  }
}
