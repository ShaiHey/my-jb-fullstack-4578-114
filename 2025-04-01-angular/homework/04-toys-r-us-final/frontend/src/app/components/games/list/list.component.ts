import { Component, computed, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { GamesService } from '../../../services/games.service';
import { Game } from '../../../models/games/game.model';
import { Target } from '../../../models/target.model';

@Component({
  selector: 'app-list',
  imports: [ CardComponent ],
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  list = signal<Game[]>([])
  targets = signal<Target[]>([])
  selectedTarget = signal<string>('');

  constructor(
    public gamesService: GamesService
  ) {}

  filteredGames = computed(() => {
    const currentTarget = this.selectedTarget();
    if(!currentTarget) return this.list();
    return this.list().filter(game => game.targetId === currentTarget);
  });

  async ngOnInit(): Promise<void> {
    try {
      const list = await this.gamesService.getAll()
      this.list.set(list)

      const targets = await this.gamesService.getAllTargets()
      this.targets.set(targets)
    } catch (error) {
      alert(error)
    }
  }

  addGame(game: Game) {
    this.list.set([game, ...this.list()])
  }

  removeGame(gameId: string) {
    this.list.set(this.list().filter(p => p.id !== gameId))
  }

  updateSelectedTarget(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedTarget.set(select.value);
  }
}
