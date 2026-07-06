import { View, Text, Pressable, ScrollView } from "react-native";

import TeamCard from "../components/TeamCard";

import { styles } from "../styles/TeamScreensStyles";
import { useTeams } from "../context/TeamContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationtypes";

export default function TeamsScreen(){

    const { teams } = useTeams();
    const { addTeam } = useTeams();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return(
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>
                Mis Equipos
            </Text>
            {
                teams.map(team => (
                    <TeamCard
                        key={team.id}
                        name={team.name}
                        onPress={() =>
                            navigation.navigate("TeamDetail", {
                                teamId: team.id,
                            })
                        }
                    />
                ))
            }
            <Pressable
              style={styles.button}
              onPress={() => addTeam(`Equipo ${teams.length + 1}`)}
            >
              <Text style={styles.buttonText}>
                + Nuevo Equipo
              </Text>
            </Pressable>
        </ScrollView>
    );
}