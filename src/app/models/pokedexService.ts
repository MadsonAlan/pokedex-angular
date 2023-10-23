export class PokedexServiceResponse{
  count!: number;
  results!: PokedexServiceResponseItens[];
}

export class PokedexServiceResponseItens{
  name!: string;
  url!:string;
  image!: string;
  color?: string;
}