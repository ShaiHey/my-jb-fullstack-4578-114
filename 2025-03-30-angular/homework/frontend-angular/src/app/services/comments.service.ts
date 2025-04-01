import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { PostComment } from '../models/comment/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(
    public httpClient: HttpClient
  ) { }

  async createComment(postId: string, draft: {body: string}): Promise<PostComment[]> {
    const observable = this.httpClient.post<PostComment[]>(`${environment.restServerUrl}/comments/${postId}`, draft)
    const newComments = firstValueFrom(observable)
    return newComments;
  }

  async deleteComment(postId: string, commentId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/comments/${postId}/${commentId}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted;
  }
}