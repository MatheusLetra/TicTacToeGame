import { TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { SquareProps } from "@/interfaces/SquareProps";
import LucideIcon from "../LucideIcon";

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
        {
          squaresData[index] === 'X' && (
            <LucideIcon 
              name="X"
              color="#CB6CE6"
              size={50}
            />
          ) 
        }

        {
          squaresData[index] === 'O' && (
            <LucideIcon 
              name="Circle"
              color="#CB6CE6"
              size={50}
            />
          ) 
        }
      </View>
    </TouchableOpacity>
  )
}