import { View, Text } from "react-native";
import { styles } from '../styles/StatBarStyles';

interface StatBarProps {
  name: string;
  value: number;
}

export default function StatBar({ name, value }: StatBarProps) {
    
  const getBarColor = (value: number) => {
    if (value < 40) return "#F44336";      // Rojo
    if (value < 70) return "#FF9800";      // Naranja
    if (value < 100) return "#FFEB3B";     // Amarillo
    if (value < 130) return "#4CAF50";     // Verde

    return "#2196F3";                      // Azul
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <View style={styles.background}>
        <View
            style={[
            styles.fill,
            {
                width: `${Math.min(value, 150) / 1.5}%`,
                backgroundColor: getBarColor(value),
            },
            ]}
        />
      </View>
    </View>
  );
}