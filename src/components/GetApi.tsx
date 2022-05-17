import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

interface PAbility {
  name: string;
  url: string;
}

interface PAbilities {
  ability: any;
  slot: number;
}

interface IPokemon {
  id: number;
  name: string;
  abilities: PAbilities[];
  weight: number;
  sprites: any;
}

// interface IPokemon {
//   id: number;
//   name: string;
//   abilities: [
//     {
//       ability: [
//         {
//           name: string;
//           url: string;
//         }
//       ];
//       slot: number;
//     }
//   ];
// }

const GetApi = () => {
  const URL = "https://c/api/v2/pokemon/23";

  // const poke_abi: PAbility[] = [{ name: "", url: "" }];

  // const poke_abilities: PAbilities[] = [{ ability: poke_abi, slot: 0 }];

  const defaultPokemon: IPokemon = {
    id: 0,
    name: "",
    abilities: [{ ability: [{ name: "", url: "" }], slot: 0 }],
    weight: 0,
    sprites: "",
  };

  const [pokemon, setPokemon]: [IPokemon, (pokemon: IPokemon) => void] =
    useState(defaultPokemon);

  useEffect(() => {
    axios.get<IPokemon>(URL).then((response) => {
      setPokemon(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <section className="w-full h-min flex flex-col justify-center bg-black items-center">
      <div className="h-min text-white">
        <p>ID: {pokemon.id}</p>
        <p>NAME: {pokemon.name}</p>
        <p>Weight: {pokemon.weight}</p>
        <ol>
          {pokemon.abilities.map((item) => (
            <li key={item.slot}>{item.ability.name}</li>
          ))}
        </ol>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>
    </section>
  );
};

export default GetApi;
