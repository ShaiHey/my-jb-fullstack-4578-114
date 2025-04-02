import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/books/book.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/books/draft.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAll(): Promise<Book[]> {
    const observable = this.httpClient.get<Book[]>(`${environment.restServerUrl}`)
    const list = firstValueFrom(observable);
    return list;
  }

  async create(draft: Draft): Promise<Book> {
    const observable = this.httpClient.post<Book>(`${environment.restServerUrl}`, draft)
    const newBook = firstValueFrom(observable);
    return newBook;
  }

  async delete(bookId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/${bookId}`)
    const isDeleted = firstValueFrom(observable);
    return isDeleted;
  }
}
