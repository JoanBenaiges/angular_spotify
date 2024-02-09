import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '../../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';




@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})


export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {

    this.trackService.getAllTracks$()
      .subscribe(response => {
        console.log('Respuesta de GetAlltracks', response)
      })
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
