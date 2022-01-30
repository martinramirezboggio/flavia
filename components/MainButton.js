import React from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  Platform
} from "react-native"
import Colors from "../constants/colors";

export default function MainButton(props){
  let ButtonComponent = TouchableOpacity

  if(Platform.OS === 'android' && Platform.Version >=21) {
    ButtonComponent = TouchableNativeFeedback
  }
  const {
    onPress,
    disabled,
    label,
    icon,
  } = props

  return(
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={onPress} activeOpacity={0.6} disabled={ disabled }>
        <View style={styles.button}>
          {
            icon && icon
          }
          
          {
           label && <Text style={styles.buttonText}>{label}</Text>
          }
        </View>
      </ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: 1,
  },
  button: {
    width: 80,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: Colors.blue,
  },
  buttonText: {
    color: Colors.darkGrey,
    fontFamily: 'open-sans',
    fontSize: 18
  }
})
