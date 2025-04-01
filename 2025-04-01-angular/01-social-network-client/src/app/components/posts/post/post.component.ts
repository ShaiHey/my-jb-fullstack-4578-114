import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/post/post.model';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';
import { PostCommentsComponent } from "../../comments/post-comments/post-comments.component";
import { PostComment } from '../../../models/comment/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [PostCommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(
    public profileService: ProfileService,
    public router: Router
  ) {}

  post = input<Post>()
  deletedPost = output<string>()
  commentsIsChange = output<PostComment[]>()
  commentsIsDelete = output<{commentId: string, postId: string}>()
  awsUrl = `${environment.awsServerUrl}/`

  async deleteMe() {
    try {
      this.profileService.deletePost(this.post()!.id)
      this.deletedPost.emit(this.post()!.id)
    } catch (error) {
      alert(error)
    }
  }

  async editMe() {
    this.router.navigate([`/edit/${this.post()!.id}`])
  }

  commentsChange(comments: PostComment[]) {
    this.commentsIsChange.emit(comments)
  }

  deleteComment(id: string) {
    this.commentsIsDelete.emit({commentId: id, postId: this.post()!.id})
  }
}
