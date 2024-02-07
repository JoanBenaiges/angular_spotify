import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: '',
    album: '',
    name: '',
    url: '',
    _id: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
