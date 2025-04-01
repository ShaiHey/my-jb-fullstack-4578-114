import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { Draft } from '../../../models/post/draft.model';
import { Post } from '../../../models/post/post.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public profileService: ProfileService
  ) {}

  newForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ])
  })
  newPost = output<Post>()

  async addPost() {
    if(this.newForm.invalid) return;

    try {
      const post = await this.profileService.addPost(this.newForm.value as Draft)
      this.newPost.emit(post)
      this.newForm.reset()
    } catch (error) {
      alert(error)
    }
  }
}
