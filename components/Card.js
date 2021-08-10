import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import Colors from "../constants/colors";

export default function Card(props){
  let CardComponent = TouchableOpacity

  if(Platform.OS === 'android' && Platform.Version >=21) {
    CardComponent = TouchableNativeFeedback
  }

  const { id, type, title, onClick } = props

 return(
   <View style={styles.card}>
     <CardComponent onPress={() => onClick(id, type)} activeOpacity={0.6}>
       <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
       </View>
     </CardComponent>
   </View>
 )
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 90,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
  },
  cardTitleContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    color: Colors.blue,
    fontSize: 12
  }
})
