import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokedexServiceResponse } from '../models/pokedexService';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) {}

  public getPokedex(): Observable<PokedexServiceResponse>{
    return this.httpClient.get<PokedexServiceResponse>(this.apiURL)
  }
}
