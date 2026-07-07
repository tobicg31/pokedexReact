import { Pressable, Text } from "react-native";
import { styles } from "../styles/TeamCardStyles";

interface TeamCardProps{
    name:string;
    onPress:() => void;
}

export default function TeamCard({name, onPress}:TeamCardProps){
    return(
        <Pressable
            style={styles.card}
            onPress={onPress}
        >
            <Text style={styles.title}>
                {name}
            </Text>

            <Text style={styles.arrow}>›</Text>
        </Pressable>
    )
}