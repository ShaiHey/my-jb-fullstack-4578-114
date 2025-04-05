import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../../../services/games.service';
import { Draft } from '../../../models/games/draft.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public gamesService: GamesService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    target: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
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
