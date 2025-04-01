import { Component, input, output } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { PostComment } from '../../../models/comment/comment.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostCommentDraft } from '../../../models/comment/draft.model';

@Component({
  selector: 'app-new-comment',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-comment.component.html',
  styleUrl: './new-comment.component.css'
})
export class NewCommentComponent {

  constructor(
    public commentsService: CommentsService
  ) {}

  newForm = new FormGroup({
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  })

  postId = input<string>()
  newComment = output<PostComment[]>()

  async addComment() {
    try {
      const comments = await this.commentsService.createComment(this.postId()!, this.newForm.value as PostCommentDraft)
      this.newComment.emit(comments)
    } catch (error) {
      
    }
  }
}
