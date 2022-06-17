export interface IPokedexResult {
  name: string;
  url: string;
}

export interface IPokedexData {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPokedexResult[];
}

export interface IPokedexResponse {
  data: IPokedexData;
  status: number;
}

export interface ICharacterData {
  id: number;
  name: string;
  type: string;
  spite: string;
}

export interface ICharactersData {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface ICharactersResponse {
  data: ICharactersData;
  status: number;
}
