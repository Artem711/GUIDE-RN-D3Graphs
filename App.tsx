// PLUGINS IMPORTS //
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

// COMPONENTS IMPORTS //
import Index from "./src/CandleGraph"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    // <NavigationContainer>
    // <SafeAreaView style={styles.wrapper}>
    <Index />
    // </SafeAreaView>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
})

export default App
