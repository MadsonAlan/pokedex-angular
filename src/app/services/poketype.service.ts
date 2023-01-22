import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoketypeServiceResponse } from '../models/poketypeService';

@Injectable({
  providedIn: 'root'
})
export class PoketypeService {
  apiURL = 'https://pokeapi.co/api/v2/type/';

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) {}

  public getPokedex(): Observable<PoketypeServiceResponse>{
    return this.httpClient.get<PoketypeServiceResponse>(this.apiURL)
  }
}
