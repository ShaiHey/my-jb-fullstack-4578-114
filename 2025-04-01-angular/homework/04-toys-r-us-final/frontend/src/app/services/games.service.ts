import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Game } from '../models/games/game.model';
import { Draft } from '../models/games/draft.model';
import { Target } from '../models/target.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAll(): Promise<Game[]> {
    const observable = this.httpClient.get<Game[]>(`${environment.restServerUrl}`)
    const games = firstValueFrom(observable)
    return games
  }

  async getAllTargets(): Promise<Target[]> {
    const observable = this.httpClient.get<Target[]>(`${environment.restServerUrl}/target`)
    const targets = firstValueFrom(observable)
    return targets
  }

  async create(draft: Draft): Promise<Game> {
    const observable = this.httpClient.post<Game>(`${environment.restServerUrl}`, draft)
    const newGame = firstValueFrom(observable)
    return newGame
  }

  async delete(gameId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/${gameId}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
