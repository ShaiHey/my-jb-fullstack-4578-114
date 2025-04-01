import { Component, input, output } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { PostComment } from '../../../models/comment/comment.model';

@Component({
  selector: 'app-new-comment',
  imports: [],
  templateUrl: './new-comment.component.html',
  styleUrl: './new-comment.component.css'
})
export class NewCommentComponent {

  constructor(
    public commentsService: CommentsService
  ) {}

  postId = input<string>()
  newComment = output<PostComment[]>()

  async submit() {
    try {
      const comments = await this.commentsService.createComment(this.postId()!, {body: 'Got a POST request to endpoint /comments/67e29063e641967c3e873ffe'})
      this.newComment.emit(comments)
    } catch (error) {
      
    }
  }
}
