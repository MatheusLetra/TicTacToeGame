import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import LOGO from "@/assets/images/logo.png";
import PLAYBUTTON from "@/assets/images/play-button.png";

import Game from "@/screens/Game";

import { styles } from "./styles";


export default function Home() {

  const [playing, setPlaying] = useState(false);
  const [showHome, setShowHome] = useState(true);

  useEffect(() => { }, []);

  const handlePlayGame = () => {
    setPlaying(true);
    setShowHome(false);
  }

  const handleShowHome = () => {
    setPlaying(false);
    setShowHome(true);
  }

  if (!showHome && playing) {
    return <Game
      handleShowHome={handleShowHome}
    />;
  }



  return (
    <View style={styles.container}>
      <Image
        source={LOGO}
        style={styles.logo}
      />

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handlePlayGame}
      >
        <Image
          source={PLAYBUTTON}
          style={styles.playbutton}
        />
      </TouchableOpacity>
    </View>
  )
}