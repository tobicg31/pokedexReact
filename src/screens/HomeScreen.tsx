import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  View,
} from "react-native";

import PokemonCard from "../components/PokemonCard";
import { styles } from "../styles/HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationtypes";

export default function HomeScreen() {
  const navigation =  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cargarPokemon = async (nombreOId: string | number) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombreOId}`
      );

      if (!response.ok) {
        setPokemonData(null);
        setError(`No se encontró "${nombreOId}"`);
        return;
      }

      const data = await response.json();

      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${nombreOId}`
      );

      const speciesData = await speciesResponse.json();

      const descripcion = speciesData.flavor_text_entries.find(
        (entry: any) => entry.language.name === "es"
      );

      setPokemonData({
        ...data,
        description: descripcion?.flavor_text.replace(/\f/g, " ") ??
          "Sin descripción.",
      });
    } catch (err) {
      setPokemonData(null);
      setError("Error al conectarse con la PokéAPI.");
    } finally {
      setLoading(false);
    }
  };

  const buscarPokemon = () => {
    const nombre = pokemonName.trim().toLowerCase();

    if (!nombre) {
      setError("Ingrese un nombre.");
      return;
    }

    cargarPokemon(nombre);
  };

  const pokemonAleatorio = () => {
    const id = Math.floor(Math.random() * 1025) + 1;

    setPokemonName("");

    cargarPokemon(id);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>POKEDEX</Text>

        <Text style={styles.subtitle}>
          Encuentra tu Pokémon favorito
        </Text>
      </View>

      <TextInput
        placeholder="Ingrese nombre Pokémon"
        value={pokemonName}
        onChangeText={setPokemonName}
        style={styles.input}
      />

      <Pressable
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={buscarPokemon}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Buscando..." : "Buscar"}
        </Text>
      </Pressable>

      <Pressable
        style={[styles.randomButton, loading && styles.buttonDisabled]}
        onPress={pokemonAleatorio}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          Pokémon aleatorio
        </Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Teams")}
      >
        <Text style={styles.buttonText}>📋 Mis Equipos</Text>
      </Pressable>

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      {loading && (
        <ActivityIndicator
          size="large"
          color="#E53935"
        />
      )}

      {pokemonData && (
        <PokemonCard pokemon={pokemonData} />
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}