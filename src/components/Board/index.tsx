import { View } from "react-native";

import { styles } from "./styles";
import Square from "@/components/Square";
import { BoardProps } from "@/interfaces/BoardProps";

export default function Board({ handleModifyData, squaresData }: BoardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.squarescontainer}>

        {squaresData.map((_, index) => {
          return (
            <Square
              handleModifyData={handleModifyData}
              squaresData={squaresData}
              index={index}
              key={index}
            />
          )
        })}
      </View>
    </View>
  )
}