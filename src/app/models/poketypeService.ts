import { PokedexServiceResponseItens } from "./pokedexService";

export class PoketypeServiceResponse{
  count!: number;
  results!: PoketypeServiceResponseItens[];
}

export class PoketypeServiceResponseItens{
  name!: string;
  url!:string;
}

