import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/books/book.model';

@Component({
  selector: 'app-list',
  imports: [ CardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  list = signal<Book[]>([])

  constructor(
    public booksService: BooksService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const list = await this.booksService.getAll()
      this.list.set(list)
    } catch (error) {
      alert(error)
    }
  }

  addBook(book: Book) {
    this.list.set([book, ...this.list()])
  }

  removeBook(bookId: string) {
    this.list.set(this.list().filter(b => b.id !== bookId))
  }
}
