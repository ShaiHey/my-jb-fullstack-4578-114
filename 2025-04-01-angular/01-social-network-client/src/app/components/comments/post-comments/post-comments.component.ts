import { Component, input, output } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';
import { CommentComponent } from '../comment/comment.component';
import { NewCommentComponent } from "../new-comment/new-comment.component";

@Component({
  selector: 'app-post-comments',
  imports: [CommentComponent, NewCommentComponent],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css'
})
export class PostCommentsComponent {
  postId = input<string>()
  comments = input<PostComment[]>()
  commentsChange = output<PostComment[]>()
  commentsDeleted = output<string>()

  removeComment(id: string) {
    this.commentsDeleted.emit(id)
  }

  updateComment(comments: PostComment[]) {
    this.commentsChange.emit(comments)
  }
}
