import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../constants/colors'

const CustomButton = (props) => {

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.button}>
        {props.icon && props.icon}
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
    padding: 15,
    alignItems: "center",
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 5
  }
})

export default CustomButton