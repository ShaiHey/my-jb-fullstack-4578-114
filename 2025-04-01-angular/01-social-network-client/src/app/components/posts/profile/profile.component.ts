import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Post } from '../../../models/post/post.model';
import { PostComponent } from '../post/post.component';
import { PostComment } from '../../../models/comment/comment.model';
import { NewComponent } from "../new/new.component";

@Component({
  selector: 'app-profile',
  imports: [PostComponent, NewComponent],
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

  addPost(post: Post) {
    this.profile.set([post, ...this.profile()])
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

  removeComment(event: { postId: string, commentId: string }) {
    const { postId, commentId } = event
    const profile = this.profile()
    const post = profile.find(p => p.id === postId)
    if(post) {
      post.comments = post.comments.filter(c => c.id !== commentId)
    }
    this.profile.set(profile)
  }
}
