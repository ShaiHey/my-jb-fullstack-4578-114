import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [],
  // providers: [ ProfileService ], // if the components needs its own ProfileService, it states here like so...
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(
    public profileService: ProfileService
  ) {}

  async ngOnInit(): Promise<void> {
    const profile = await this.profileService.getProfile()
    console.log(profile)
  }
}
