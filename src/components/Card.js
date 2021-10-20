import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";

export default function Card(props) {
    return (
        <div>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>{props.title}</Text>
          <Text>{props.time}</Text>
          <Text>{props.city}</Text>
          <Text>{props.department}</Text>         
        </TouchableOpacity>        
      </View>
        </div>
    )
}


const styles = StyleSheet.create({
    Container: {
      margin: 5,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10
    },
    title: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold'
  
    }
  });
  