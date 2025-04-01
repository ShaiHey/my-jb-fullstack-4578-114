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
  commentsDeleted = output<PostComment>()

  removeComment(comments: PostComment) {
    this.commentsDeleted.emit(comments)
  }

  updateComment(comments: PostComment[]) {
    this.commentsChange.emit(comments)
  }
}
