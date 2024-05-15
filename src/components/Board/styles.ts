import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  squarescontainer: {
    width: 300,
    height: 450,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:3,
    backgroundColor: '#c0c0c0',
    borderRadius: 10
  }
})


export { styles }