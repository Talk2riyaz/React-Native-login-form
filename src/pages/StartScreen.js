import React from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import { Text, StyleSheet } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Text style={styles.text}>Venturit</Text>
      <Text>
        The easiest way to start with your amazing application.
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({ 
  text: {
    fontSize: 20,
  }
} )