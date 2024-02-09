import { Component, OnInit, OnDestroy } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { TrackModel } from 'src/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})


export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800',
    album: 'album',
    name: 'cancion',
    url: 'http//localhost',
    _id: 1
  }

  listObserver: Array<Subscription> = []


  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción...', response)

      }
    )

    this.listObserver = [observer1]

  }

  ngOnDestroy(): void {

    this.listObserver.forEach(u => u.unsubscribe())

  }

}