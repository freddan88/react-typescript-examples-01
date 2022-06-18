import { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { sortBy } from "lodash";
import { ICharacterData, ICharactersResponse, IPokedexData, IPokedexResponse } from "./PokedexTypes";
import "./pokedexStyles.css";

const POKEMON_LIMIT = 9;
const INITIAL_URL = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}&offset=0`;

const renderCharacterList = (characters: ICharacterData[]) => {
  return characters.map((obj) => (
    <li key={obj.id} className="pokedex-list-card">
      <span>{`#${obj.id}`}</span>
      <img src={obj.spite} alt={obj.name} />
      <p>{obj.name}</p>
      <span>{obj.type}</span>
    </li>
  ));
};

const PokedexAll: FC = () => {
  const [pokedex, setPokedex] = useState<IPokedexData>();
  const [currentUrl, setCurrentUrl] = useState(INITIAL_URL);
  const [characters, setCharacters] = useState<ICharacterData[]>();

  const getPokedexInfo = useCallback(async () => {
    try {
      const response: IPokedexResponse = await axios.get(currentUrl);
      if (response.status !== 200) throw new Error(`Error http-status: ${response.status}`);
      setPokedex(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [setPokedex, currentUrl]);

  const getCharactersInfo = useCallback(async () => {
    if (pokedex && pokedex.results.length > 0) {
      const characterPromises = pokedex.results.map((obj) => axios.get(obj.url));
      try {
        const responses: ICharactersResponse[] = await Promise.all(characterPromises);
        if (responses.some((obj) => obj.status !== 200)) throw new Error("Error: Could not get information about all characters");
        const characters = responses.map((response) => {
          return {
            id: response.data.id,
            name: response.data.name,
            type: response.data.types[0].type.name,
            spite: response.data.sprites.other.dream_world.front_default,
          };
        });
        setCharacters(sortBy(characters, "id"));
      } catch (error) {
        console.error(error);
      }
    }
  }, [pokedex, setCharacters]);

  useEffect(() => {
    if (pokedex) return;
    getPokedexInfo();
  }, []);

  useEffect(() => {
    if (!pokedex) return;
    getCharactersInfo();
  }, [pokedex]);

  useEffect(() => {
    if (pokedex && characters) {
      getPokedexInfo();
    }
  }, [currentUrl]);

  return (
    <div className="pokedex-container">
      <nav>
        <button disabled={pokedex && pokedex.previous === null} type="button" onClick={() => setCurrentUrl(pokedex && pokedex.previous ? pokedex.previous : INITIAL_URL)}>
          Back
        </button>
        <h1>Pokedex</h1>
        <button disabled={pokedex && pokedex.next === null} type="button" onClick={() => setCurrentUrl(pokedex && pokedex.next ? pokedex.next : INITIAL_URL)}>
          Next
        </button>
      </nav>
      <ul className="pokedex-list">{characters && renderCharacterList(characters)}</ul>
    </div>
  );
};

export default PokedexAll;
