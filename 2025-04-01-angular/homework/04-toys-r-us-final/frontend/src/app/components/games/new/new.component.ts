import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../../../services/games.service';
import { Draft } from '../../../models/games/draft.model';
import { Target } from '../../../models/target.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

  constructor(
    public gamesService: GamesService,
    public router: Router
  ) {}

  targets = signal<Target[]>([])

  async ngOnInit(): Promise<void> {
    try {
      const targets = await this.gamesService.getAllTargets()
      this.targets.set(targets)
    } catch (error) {
      alert(error)
    }
  }

  newForm = new FormGroup({
    targetId: new FormControl('', [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ]),
  })

  async addGame() {
    if(this.newForm.invalid) return;

    try {
      await this.gamesService.create(this.newForm.value as Draft)
      this.router.navigate(['/'])
    } catch (error) {
      
    }
  }

}
