import { Component, input, output } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  constructor(
    public commentsService: CommentsService
  ) {}

  comment = input<PostComment>()
  deletedComment = output<PostComment>()
  postId = input<string>()

  async deleteComment() {
    try {
      await this.commentsService.deleteComment(this.postId()!, this.comment()!.id)
      this.comment()!.postId = this.postId()!
      this.deletedComment.emit(this.comment()!)
    } catch (error) {
      alert(error)
    }
  }
}
