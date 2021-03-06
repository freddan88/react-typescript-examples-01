import { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { sortBy } from "lodash";
import { ICharacterData, ICharactersResponse, IPokedexData, IPokedexResponse, ISavedCharacter } from "./PokedexTypes";
import "./pokedexStyles.css";

const INITIAL_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9";

const renderCharacterList = (characters: ICharacterData[]) => {
  return characters.map((obj) => (
    <article key={obj.id} data-type={obj.type} className="pokedex-card">
      <header title="Pokémon ID">{`#${obj.id}`}</header>
      <img src={obj.sprite} alt={obj.name} />
      <footer>
        <p title="Pokémon Name">{obj.name}</p>
        <span title="Pokémon Type">{obj.type}</span>
      </footer>
    </article>
  ));
};

const PokedexAll: FC = () => {
  const [pokedex, setPokedex] = useState<IPokedexData>();
  const [currentUrl, setCurrentUrl] = useState(INITIAL_URL);
  const [characters, setCharacters] = useState<ICharacterData[]>();
  const [savedCharacters, setSavedCharacters] = useState<ISavedCharacter[]>([]);

  const getPokedexInfo = useCallback(async () => {
    try {
      const response: IPokedexResponse = await axios.get(currentUrl);
      if (response.status !== 200) throw new Error(`Error http-status: ${response.status}`);
      setPokedex(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [currentUrl, setPokedex]);

  const getCharactersInfo = useCallback(async () => {
    if (pokedex && pokedex.results.length > 0) {
      try {
        const characterPromises = pokedex.results.map((obj) => axios.get(obj.url));
        const responses: ICharactersResponse[] = await Promise.all(characterPromises);
        if (responses.some((obj) => obj.status !== 200)) throw new Error("Error: Could not get information about all characters");
        const characters = responses.map((response) => {
          const { other, front_default } = response.data.sprites;
          const image = other.dream_world.front_default ? other.dream_world.front_default : front_default;
          return {
            id: response.data.id,
            name: response.data.name,
            type: response.data.types[0].type.name,
            sprite: image,
          };
        });
        setSavedCharacters([...savedCharacters, { url: currentUrl, data: sortBy(characters, "id") }]);
        setCharacters(sortBy(characters, "id"));
      } catch (error) {
        console.error(error);
      }
    }
  }, [pokedex, currentUrl, savedCharacters, setCharacters, setSavedCharacters]);

  useEffect(() => {
    getPokedexInfo();
  }, [currentUrl]);

  useEffect(() => {
    if (!pokedex) return;
    const savedCharacter = savedCharacters.find((obj) => obj.url === currentUrl);
    if (savedCharacter) {
      setCharacters(savedCharacter.data);
    } else {
      getCharactersInfo();
    }
  }, [pokedex]);

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
      <section className="pokedex-section">{characters && renderCharacterList(characters)}</section>
    </div>
  );
};

export default PokedexAll;
