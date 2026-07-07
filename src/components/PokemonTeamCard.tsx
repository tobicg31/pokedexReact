import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTeams } from "../context/TeamContext";

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
        <View
            style={{
                flexDirection:"row",
                alignItems:"center",
                backgroundColor:"white",
                marginVertical:8,
                padding:15,
                borderRadius:12
            }}
            >
            <Image
                source={{
                    uri:pokemon.sprites.front_default
                }}
                style={{
                    width:70,
                    height:70
                }}
            />

            <View
                style={{
                    flex:1
                }}
            >
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >
                {pokemon.name.toUpperCase()}
                </Text>
                <Text>#{pokemon.id}</Text>
            </View>
            <Pressable
                onPress={()=>
                    removePokemonFromTeam(teamId,pokemonId)
                }
            >
                <Text style={{fontSize:24}}>❌</Text>
            </Pressable>
        </View>
    )
}