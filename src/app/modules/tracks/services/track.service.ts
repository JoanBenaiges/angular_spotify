import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../enviroments/environment';


@Injectable({
  providedIn: 'root'
})

export class TrackService {

  private readonly URL = enviroment.api;

  constructor(private httpClient: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)

  }

}
