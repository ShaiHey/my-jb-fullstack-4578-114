import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/post/post.model';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';
import { PostCommentsComponent } from "../../comments/post-comments/post-comments.component";
import { PostComment } from '../../../models/comment/comment.model';

@Component({
  selector: 'app-post',
  imports: [PostCommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(
    public profileService: ProfileService
  ) {}

  post = input<Post>()
  deletedPost = output<string>()
  commentsIsChange = output<PostComment[]>()
  commentsIsDelete = output<PostComment>()
  awsUrl = `${environment.awsServerUrl}/`

  async deleteMe() {
    try {
      this.profileService.deletePost(this.post()!.id)
      this.deletedPost.emit(this.post()!.id)
    } catch (error) {
      alert(error)
    }
  }

  commentsChange(comments: PostComment[]) {
    this.commentsIsChange.emit(comments)
  }

  deleteComment(comment: PostComment) {
    this.commentsIsDelete.emit(comment)
  }
}
