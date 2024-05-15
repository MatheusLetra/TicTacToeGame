import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { SquareProps } from "@/interfaces/SquareProps";

export default function Square({ handleModifyData, squaresData, index }: SquareProps) {

  const handlePress = () => {

    if (squaresData[index] === "") {
      handleModifyData(index);
    }

  }

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <Text style={styles.value}>{squaresData[index]}</Text>
      </View>
    </TouchableOpacity>
  )
}