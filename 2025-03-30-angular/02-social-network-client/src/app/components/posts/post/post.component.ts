import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/post/post.model';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(
    public profileService: ProfileService
  ) {}

  post = input<Post>()
  deletedPost = output<string>()
  imageURL = `${environment.awsServerUrl}/${this.post()?.imageUrl}`

  async deleteMe() {
    try {
      this.profileService.deletePost(this.post()!.id)
      this.deletedPost.emit(this.post()!.id)
    } catch (error) {
      alert(error)
    }
  }
}
