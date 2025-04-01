import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Post } from '../../../models/post/post.model';
import { PostComponent } from '../post/post.component';
import { PostComment } from '../../../models/comment/comment.model';

@Component({
  selector: 'app-profile',
  imports: [ PostComponent ],
  // providers: [ ProfileService ], // if the components needs its own ProfileService, it states here like so...
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile = signal<Post[]>([])

  constructor(
    public profileService: ProfileService
  ) {}

  ngOnDestroy(): void {
  }

  async ngOnInit(): Promise<void> {
    try {
      const profilePosts = await this.profileService.getProfile()
      this.profile.set(profilePosts)
    } catch (error) {
      alert(error)
    }
  }

  removePost(id: string) {
    this.profile.set(this.profile().filter(p => p.id !== id))
  }

  updateComments(comments: PostComment[]){
    const copy = [...this.profile()]
    const post = copy.findIndex(p => p.id === comments[0].postId)
    copy[post].comments = comments
    this.profile.set(copy)
  }

  removeComment(comment: PostComment) {
    const copy = [...this.profile()]
    const post = copy.find(p => p.id === comment.postId)
    const newComments = post?.comments.filter(c => c.id === comment.id)
    post!.comments = newComments!
    this.profile.set(copy)
  }
}
