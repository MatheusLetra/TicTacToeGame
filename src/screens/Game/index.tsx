import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles";

import { GameProps } from "@/interfaces/GameProps";
import Board from "@/components/Board";
import { verifyEndGame } from "@/utils/verifyEndGame";

const initialSquaresData = ["", "", "", "", "", "", "", "", ""];

export default function Game({ handleShowHome }: GameProps) {

  const [squaresData, setSquaresData] = useState<string[]>([...initialSquaresData]);
  const [totalTurns, setTotalTurns] = useState(0);
  const [playerTurn, setPlayerTurn] = useState("X");
  const [endGameResult, setEndGameResult] = useState("O vencedor é X");


  const handleModifyData = (squareIndex: number) => {
    let newSquareData: string[] = []

    squaresData.map((square, index) => {
      if (index === squareIndex) {
        newSquareData.push(playerTurn)
      } else {
        newSquareData.push(square)
      }
    })

    setSquaresData([...newSquareData])

    setPlayerTurn(playerTurn === "X" ? "O" : "X")
    setTotalTurns(totalTurns + 1)
    setEndGameResult("")

    let result = verifyEndGame([...newSquareData])
    if (result[0] === true && result[1] !== "") {
      setEndGameResult(`O vencedor é "${result[1]}"`)
      setSquaresData([...initialSquaresData])
      setTotalTurns(0)
    }

    if ((totalTurns + 1) === 9) {
      setEndGameResult("Deu empate")
      setSquaresData([...initialSquaresData])
      setTotalTurns(0)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={handleShowHome}>
          <FontAwesome
            name="home"
            size={40}
            color="#CB6CE6"
          />
        </TouchableOpacity>
      </View>



      <Board
        handleModifyData={handleModifyData}
        squaresData={squaresData}
      />

      <Text style={styles.endgameresult}>{endGameResult}</Text>

    </View>
  )
}