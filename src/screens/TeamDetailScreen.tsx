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
    const { teams } = useTeams();
    const {deleteTeam} = useTeams();
    const {renameTeam} = useTeams();
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
            <View
                style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    marginBottom:20
                }}
            >
            <Pressable
                onPress={()=>{
                    setNewName(team.name);
                    setModalVisible(true);
                }}
            >
            <Text style={{fontSize:28}}>✏️</Text>
            </Pressable>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => deleteTeam(team.id)}
            >
                <Text style={styles.buttonText}>Borrar Equipo</Text>
            </Pressable>
            {
                Array.from({ length: 6 }).map((_, index) => {
                    const pokemon = team.pokemons[index];
                    return (
                        <View
                            key={index}
                            style={styles.slot}
                        >
                            <Text style={styles.slotNumber}>
                                {index + 1}.
                            </Text>
                            <PokemonTeamCard
                                pokemonId={pokemon}
                                teamId={team.id}
                            />
                        </View>
                    );
                })
            }
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                >

                <View
                style={{

                flex:1,

                justifyContent:"center",

                alignItems:"center",

                backgroundColor:"rgba(0,0,0,.5)"

                }}
                >

                <View
                style={{

                backgroundColor:"white",

                padding:20,

                borderRadius:15,

                width:"85%"

                }}
                >

                <Text
                style={{

                fontSize:22,

                fontWeight:"bold",

                marginBottom:15

                }}
                >

                Renombrar equipo

                </Text>

                <TextInput

                value={newName}

                onChangeText={setNewName}

                style={{

                borderWidth:1,

                borderRadius:10,

                padding:10

                }}

                />

                <Pressable

                style={{

                backgroundColor:"#4CAF50",

                padding:15,

                marginTop:20,

                borderRadius:10

                }}

                onPress={()=>{

                renameTeam(

                team.id,

                newName

                );

                setModalVisible(false);

                }}

                >

                <Text
                style={{

                textAlign:"center",

                color:"white",

                fontWeight:"bold"

                }}
                >

                Guardar

                </Text>

                </Pressable>

                </View>

                </View>

            </Modal>
        </ScrollView>
    );
    
}