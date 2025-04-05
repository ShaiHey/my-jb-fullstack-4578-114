import { Component, input, output } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { Game } from '../../../models/games/game.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(
    public gamesService: GamesService
  ) {}

  game = input<Game>()
  gameDeleted = output<string>()


  async deleteMe() {
    try {
      await this.gamesService.delete(this.game()!.id)
      this.gameDeleted.emit(this.game()!.id)
    } catch (error) {
      alert(error)
    }
  }
}
