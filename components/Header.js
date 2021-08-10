import React from "react"
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native'
import MainButton from "./MainButton";
import Colors from "../constants/colors"
import Card from "./Card";

export default function Header(props){
  const { selectedExpressions, onDeleteSelectedExpressions } = props;

  //TODO - Move right when adding a new one 

  return(
    <View style={styles.headerContainer}>
      <ScrollView style={styles.expressionsContainer} horizontal={true}>
        {
            !!selectedExpressions.length && 
            selectedExpressions.map( expression => 
              <Card key={expression.title}
                    id={expression.id}
                    title={expression.title}
                    image={expression.image}
                    type={expression.type}
                    onClick={ () => console.log('hi', expression.title)}
              />
            ) 
          }
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <MainButton 
          disabled={ !selectedExpressions.length }
          onPress={onDeleteSelectedExpressions}
        >
            Delete
        </MainButton>
        <MainButton
          disabled={ !selectedExpressions.length }
        >
          Play
        </MainButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 105,
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
    backgroundColor: '#d8d4d5',
    flexDirection: "row",
    padding: 7,
  }
})
