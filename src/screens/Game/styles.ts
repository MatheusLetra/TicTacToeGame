import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 80,
    marginTop: Platform.OS === 'ios' ? 0 : 25,
    justifyContent: 'center',
    padding: 10
  },
  endgameresult: {
    textAlign: 'center',
    fontWeight: "bold",
    color: '#CB6CE6',
    fontSize: 40,
    marginBottom: 20
  }
})


export { styles }