import { View } from "react-native";

import { styles } from "./styles";
import Square from "@/components/Square";
import { BoardProps } from "@/interfaces/BoardProps";

export default function Board({ handleModifyData, squaresData }: BoardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.squarescontainer}>
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={0}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={1}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={2}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={3}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={4}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={5}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={6}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={7}
        />
        <Square
          handleModifyData={handleModifyData}
          squaresData={squaresData}
          index={8}
        />
      </View>
    </View>
  )
}