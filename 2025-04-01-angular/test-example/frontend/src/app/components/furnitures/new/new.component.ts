import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FurnituresService } from '../../../services/furnitures.service';
import { Router } from '@angular/router';
import { FurnitureDraft } from '../../../models/furnitures/draft.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public furnitureService: FurnituresService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    type: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    size: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    color: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ])
  })

  async addFurniture() {
    if(this.newForm.invalid) return;

    try {
      await this.furnitureService.create(this.newForm.value as FurnitureDraft)
      this.router.navigate(['/'])
    } catch (error) {
      
    }
  }

}
