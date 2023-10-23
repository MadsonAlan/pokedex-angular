import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDataServiceResponse } from '../models/pokedataResponse';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {


  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) {}

  public getPokedex(idPokemon: number): Observable<PokeDataServiceResponse>{
    return this.httpClient.get<PokeDataServiceResponse>(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`)
  }
}
