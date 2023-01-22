import { Component } from '@angular/core';
import { PokedexServiceResponseItens } from 'src/app/models/pokedexService';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  pokemonList:PokedexServiceResponseItens[] =[]
  constructor(private pokedexService: PokedexService) {}
  ngOnInit() {
    this.pokedexService.getPokedex().subscribe(data => {
      data.results.map((result, index) => this.pokemonList.push({
        // image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${("000" + (index+1)).slice(-3)}.png`,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(index+1)}.png`,
        name: result.name,
        url: result.url
      }));
    });
  }

}
