import { View, Text, Pressable, Modal, TextInput, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/navigationtypes";
import { useTeams } from "../context/TeamContext";
import { useState } from "react";
import PokemonTeamCard from "../components/PokemonTeamCard";

import { styles } from "../styles/TeamDetailStyles";

type TeamDetailRouteProp = RouteProp<
    RootStackParamList,
    "TeamDetail"
>;

export default function TeamDetailScreen() {
    const route = useRoute<TeamDetailRouteProp>();
    const { teamId } = route.params;
    const {teams, deleteTeam, renameTeam} = useTeams();
    const [modalVisible, setModalVisible] = useState(false);
    const team = teams.find(t => t.id === teamId);
    const [newName, setNewName] = useState(team?.name ?? "");

    if (!team) {
        return (
            <View style={styles.container}>
                <Text>Equipo no encontrado.</Text>
            </View>
        );
    }
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>
                {team.name}
            </Text>
            <View style={styles.editRow}>
            <Pressable
                onPress={()=>{
                    setNewName(team.name);
                    setModalVisible(true);
                }}
            >
            <Text style={styles.editIcon}>✏️</Text>
            </Pressable>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => deleteTeam(team.id)}
            >
                <Text style={styles.buttonText}>Borrar Equipo</Text>
            </Pressable>
            {team.pokemons.map((pokemonId, index) => (
                <View
                    key={pokemonId}
                    style={styles.slot}
                >
                    <Text style={styles.slotNumber}>
                        {index + 1}.
                    </Text>
                    <PokemonTeamCard
                        pokemonId={pokemonId}
                        teamId={team.id}
                    />
                </View>
                ))
            }
            {Array.from({length: 6 - team.pokemons.length,}).map((_, index) => (
                <View
                        key={`empty-${index}`}
                        style={styles.slot}
                    >
                    <Text style={styles.slotNumber}>
                        {team.pokemons.length + index + 1}.
                    </Text>
                    <Text style={styles.slotText}>
                        Vacío
                    </Text>
                </View>
            ))
            }
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
            >
                <View style={styles.modalBackground}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Renombrar equipo
                    </Text>
                    <TextInput
                        value={newName}
                        onChangeText={setNewName}
                        style={styles.modalInput}
                    />
                    <Pressable
                        style={styles.modalSaveButton}
                        onPress={()=>{
                            renameTeam(team.id,newName);
                            setModalVisible(false);
                            }
                        }
                    >
                        <Text style={styles.modalSaveButtonText}>
                            Guardar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </ScrollView>
);    
}