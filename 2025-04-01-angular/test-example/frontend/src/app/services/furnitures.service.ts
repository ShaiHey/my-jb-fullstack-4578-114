import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Furniture } from '../models/furnitures/furniture.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { FurnitureDraft } from '../models/furnitures/draft.model';

@Injectable({
  providedIn: 'root'
})
export class FurnituresService {
  constructor(
    public httpClient: HttpClient
  ) { }

  async getAll(): Promise<Furniture[]> {
    const observable = this.httpClient.get<Furniture[]>(`${environment.restServerUrl}`)
    const list = firstValueFrom(observable)
    return list;
  }

  async create(draft: FurnitureDraft): Promise<Furniture> {
    const observable = this.httpClient.post<Furniture>(`${environment.restServerUrl}`, draft)
    const furniture = firstValueFrom(observable)
    return furniture;
  }
}
