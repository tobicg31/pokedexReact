import {View, Text} from 'react-native';
import { Image, StyleSheet } from "react-native";
import { styles } from '../styles/PokemonCardStyles';
import { pokemonTypeColors } from "../styles/PokemonTypeColors";
import StatBar from "./StatBar";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  description: string;
  stats: PokemonStat[];
}
interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({pokemon} : PokemonCardProps) {
  return (
    <View style={styles.card}>
        <Text>#{pokemon.id}</Text>
        <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
        <Image
            source={{
                uri: pokemon.sprites.front_default
            }}
            style={styles.img}
        />
        <View style={styles.typesContainer}>
          {pokemon.types.map((tipo) => (
            <View
              key={tipo.slot}
              style={[
                styles.typeBadge,
                {
                  backgroundColor:
                    pokemonTypeColors[
                      tipo.type.name as keyof typeof pokemonTypeColors
                    ],
                },
              ]}
            >
              <Text style={styles.typeText}>
                {tipo.type.name.toUpperCase()}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.text}>
          Altura: {pokemon.height / 10} m
        </Text>

        <Text style={styles.text}>
          Peso: {pokemon.weight / 10} kg
        </Text>
        <Text style={styles.description}>
          {pokemon.description}
        </Text>
        {pokemon.stats.map((stat) => (
          <StatBar
            key={stat.stat.name}
            name={stat.stat.name.toUpperCase()}
            value={stat.base_stat}
          />
        ))}
    </View>
  );
}

