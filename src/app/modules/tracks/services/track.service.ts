import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../enviroments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators'
import { TrackModel } from 'src/core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})

export class TrackService {
  private readonly URL = enviroment.api

  constructor(private http: HttpClient) {

  }



  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }


  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }


  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}