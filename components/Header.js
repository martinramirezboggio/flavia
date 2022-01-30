import React from "react"
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native'
import MainButton from "./MainButton";
import Colors from "../constants/colors"
import Card from "./Card";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";

export default function Header(props){
  const { selectedExpressions, onDeleteSelectedExpressions,onPlay } = props;

  //TODO - Move right when adding a new one 

  return(
    <View style={styles.headerContainer}>
      <ScrollView 
        style={styles.expressionsContainer} 
        horizontal={true}
      >
        {
            !!selectedExpressions.length && 
            selectedExpressions.map((expression,index) => 
              <Card key={`${expression.title}-${index}`}
                    id={expression.id}
                    title={expression.title}
                    image={expression.image}
                    type={expression.type}
                    onClick={ () => console.warn('hi', expression.title)}
              />
            ) 
          }
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <MainButton 
          disabled={ !selectedExpressions.length }
          onPress={onDeleteSelectedExpressions}
          icon={<Feather name="delete" size={30} color={colors.red} />}
        />
        <MainButton
          disabled={ !selectedExpressions.length }
          onPress={onPlay}
          icon={<Feather name="play" size={30} color={colors.blue} />}
        />
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
