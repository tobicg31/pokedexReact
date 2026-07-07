import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTeams } from "../context/TeamContext";
import { styles } from "../styles/PokemonTeamCardStyles";

interface Props {
    pokemonId:number;
    teamId:number;
}

export default function PokemonTeamCard({pokemonId,teamId}:Props){
    const [pokemon,setPokemon]=useState<any>();
    const {removePokemonFromTeam}=useTeams();
    useEffect(()=>{
        const fetchPokemon=async()=>{
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data=await response.json();
            setPokemon(data);
        }
        fetchPokemon();
    },[]);

    if(!pokemon)
        return null;
    return(
        <View style={styles.card}>
            <Image
                source={{
                    uri:pokemon.sprites.front_default
                }}
                style={styles.sprite}
            />

            <View style={styles.info}>
                <Text style={styles.name}>
                {pokemon.name.toUpperCase()}
                </Text>
                <Text style={styles.id}>#{pokemon.id}</Text>
            </View>
            <Pressable
                onPress={()=>
                    removePokemonFromTeam(teamId,pokemonId)
                }
            >
                <Text style={styles.removeIcon}>❌</Text>
            </Pressable>
        </View>
    )
}
