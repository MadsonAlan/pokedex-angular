import { Component } from '@angular/core';
import { PoketypeServiceResponseItens } from 'src/app/models/poketypeService';
import { PoketypeService } from 'src/app/services/poketype.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  pokemonTypeList:PoketypeServiceResponseItens[] =[]
  constructor(private poketypeService: PoketypeService) {}

  ngOnInit() {
    this.poketypeService.getPokedex().subscribe(data => {
      data.results.map((result, index) => this.pokemonTypeList.push({
        image: `https://duiker101.github.io/pokemon-type-svg-icons/icons/${result.name}.svg`,
        name: result.name,
        url: result.url
      }));
    })
  
  }
}
