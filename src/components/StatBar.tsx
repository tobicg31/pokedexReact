import { View, Text } from "react-native";
import { styles, statBarColors } from '../styles/StatBarStyles';

interface StatBarProps {
  name: string;
  value: number;
}

export default function StatBar({ name, value }: StatBarProps) {

  const getBarColor = (value: number) => {
    if (value < 40) return statBarColors.low;
    if (value < 70) return statBarColors.medium;
    if (value < 100) return statBarColors.high;
    if (value < 130) return statBarColors.veryHigh;

    return statBarColors.max;
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