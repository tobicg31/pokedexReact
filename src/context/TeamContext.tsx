import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@pokedex_teams";

export interface Team {
  id: number;
  name: string;
  pokemons: number[];
}

interface TeamContextType {
  teams: Team[];
  addTeam: (name: string) => void;
  addPokemonToTeam: (teamId: number, pokemonId: number) => void;
  deleteTeam: (teamId:number) => void;
  renameTeam: (teamId: number, newName:string) => void;
  removePokemonFromTeam: (teamId: number, pokemonId: number) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {

  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "Equipo 1",
      pokemons: [],
    },
  ]);

  useEffect(() => {
    const loadTeams = async () => {
        try {
            const json = await AsyncStorage.getItem(STORAGE_KEY);
            if (json) {
                setTeams(JSON.parse(json));
            }
        } catch (e) {
            console.log(e);
        }
    };
    loadTeams();
  }, []);

  useEffect(() => {
      AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(teams)
      );
  }, [teams]);

  const removePokemonFromTeam = (teamId: number,pokemonId: number) => {
    setTeams((prev) =>
      prev.map((team) => {

        if (team.id !== teamId)
          return team;

        return {
          ...team,
          pokemons: team.pokemons.filter(
            (id) => id !== pokemonId
          ),
        };
      })
    );
  }
  const deleteTeam = (teamId:number) => {
    setTeams(prev =>
      prev.filter(team => team.id !== teamId)
    );
  };

  const renameTeam = (teamId: number, newName:string) => {
    setTeams(prev =>
      prev.map(team =>
        team.id === teamId ? {
          ...team,
          name:newName
        }
        : team
      )
    )
  };

  const addTeam = (name: string) => {
    setTeams(prev => [
      ...prev,
      {
        id: Date.now(),
        name,
        pokemons: [],
      },
    ]);
  };

  const addPokemonToTeam = (teamId: number, pokemonId: number): boolean => {
    let agregado = false;
    setTeams(prev =>
        prev.map(team => {
            if (team.id !== teamId)
                return team;
            if (team.pokemons.length >= 6)
                return team;
            if (team.pokemons.includes(pokemonId))
                return team;
            agregado = true;
            return {
                ...team,
                pokemons: [...team.pokemons, pokemonId],
            };
        })
    );
    return agregado;
  };

  return (
    <TeamContext.Provider
      value={{
        teams,
        addTeam,
        addPokemonToTeam,
        deleteTeam,
        renameTeam,
        removePokemonFromTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );

}

export function useTeams() {

  const context = useContext(TeamContext);

  if (!context)
    throw new Error("useTeams debe usarse dentro de TeamProvider");

  return context;
}