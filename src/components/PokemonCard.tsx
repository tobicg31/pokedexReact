import {View, Text} from 'react-native';
import { Image, StyleSheet } from "react-native";
import { styles } from '../styles/PokemonCardStyles';
import { pokemonTypeColors } from "../styles/PokemonTypeColors";
import StatBar from "./StatBar";
import { Pressable, Modal } from "react-native";
import { useState } from "react";
import { useTeams } from "../context/TeamContext";

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
  const [modalVisible, setModalVisible] = useState(false);

  const { teams, addPokemonToTeam } = useTeams();

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
        <Pressable
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.addButtonText}>
                ➕ Agregar a un equipo
            </Text>
        </Pressable>
        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
        >
            <View style={styles.modalBackground}>       
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Elegí un equipo
                    </Text>
                    {teams.map(team => (
                        <Pressable
                            key={team.id}
                            style={styles.teamButton}
                            onPress={() => {
                                addPokemonToTeam(team.id, pokemon.id);
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.teamButtonText}>
                                {team.name}
                            </Text>
                        </Pressable>
                    ))}
                    <Pressable
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.cancel}>
                            Cancelar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
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

