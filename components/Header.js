import React from "react"
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import MainButton from "./MainButton";
import Colors from "../constants/colors"

export  default function Header(props){
  return(
    <View style={styles.headerContainer}>
      <View style={styles.expressionsContainer}></View>
      <View style={styles.buttonsContainer}>
        <MainButton>Delete</MainButton>
        <MainButton>Play</MainButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    flexDirection: "row",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  expressionsContainer: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#d8d4d5'
  }
})
